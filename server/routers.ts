import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { Resend } from "resend";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required").max(100),
          phone: z.string().max(30).optional().default(""),
          email: z.string().email("Invalid email").max(255),
          message: z.string().min(1, "Message is required").max(2000),
        })
      )
      .mutation(async ({ input }) => {
        const { name, phone, email, message } = input;

        const notificationContent = [
          `**Name:** ${name}`,
          phone ? `**Phone:** ${phone}` : null,
          `**Email:** ${email}`,
          `**Message:**\n${message}`,
        ]
          .filter(Boolean)
          .join("\n\n");

        // Send email via Resend
        const resendApiKey = process.env.RESEND_API_KEY;
        if (resendApiKey) {
          try {
            const resend = new Resend(resendApiKey);
            await resend.emails.send({
              from: "Mr. Ashkelon <onboarding@resend.dev>",
              to: ["moshe@jivehire.com"],
              subject: `New Enquiry from ${name} — Mr. Ashkelon`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h2 style="color: #1a2744; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">
                    New Contact Form Submission — Mr. Ashkelon
                  </h2>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; width: 120px;">Name</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    ${phone ? `<tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Phone</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone}</td>
                    </tr>` : ""}
                    <tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold;">Email</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; vertical-align: top;">Message</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
                    </tr>
                  </table>
                  <p style="margin-top: 20px; color: #666; font-size: 12px;">
                    Sent from mrashkelon.jivepilot.com contact form
                  </p>
                </div>
              `,
            });
            console.log("[Contact] Email sent via Resend to moshe@jivehire.com");
          } catch (err) {
            console.error("[Contact] Resend email failed:", err);
          }
        } else {
          console.warn("[Contact] RESEND_API_KEY not set, skipping email");
        }

        // Also send in-app Manus notification as supplement
        await notifyOwner({
          title: `New Contact Form Submission from ${name}`,
          content: notificationContent,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
