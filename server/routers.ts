import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { Resend } from "resend";

export const appRouter = router({
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
          sourcePage: z.string().max(100).optional().default("Website"),
        })
      )
      .mutation(async ({ input }) => {
        const { name, phone, email, message, sourcePage } = input;

        const notificationContent = [
          `**Page:** ${sourcePage}`,
          `**Name:** ${name}`,
          phone ? `**Phone:** ${phone}` : null,
          `**Email:** ${email}`,
          `**Message:**\n${message}`,
        ]
          .filter(Boolean)
          .join("\n\n");

        const resendApiKey = process.env.RESEND_API_KEY;
        if (resendApiKey) {
          try {
            const resend = new Resend(resendApiKey);

            // 1. Notification email to Motti
            await resend.emails.send({
              from: "Mr. Ashkelon Website <motti@mrashkelon.com>",
              to: ["motti@mrashkelon.com"],
              replyTo: email,
              subject: `New Enquiry from ${name} — ${sourcePage}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h2 style="color: #1a2744; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">
                    New Contact Form Submission — Mr. Ashkelon
                  </h2>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr>
                      <td style="padding: 8px 12px; background: #f0e8d0; font-weight: bold; width: 120px; color: #1a2744;">Page</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #c9a84c;">${sourcePage}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; color: #1a2744;">Name</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
                    </tr>
                    ${phone ? `<tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; color: #1a2744;">Phone</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone}</td>
                    </tr>` : ""}
                    <tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; color: #1a2744;">Email</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #1a2744;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; background: #f5f5f5; font-weight: bold; vertical-align: top; color: #1a2744;">Message</td>
                      <td style="padding: 8px 12px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
                    </tr>
                  </table>
                  <p style="margin-top: 20px; color: #666; font-size: 12px;">
                    Sent from mrashkelon.com — ${sourcePage}
                  </p>
                </div>
              `,
            });

            // 2. Auto-reply confirmation email to the visitor
            await resend.emails.send({
              from: "Motti Yitzhack — Mr. Ashkelon <motti@mrashkelon.com>",
              to: [email],
              subject: "Thank you for contacting Mr. Ashkelon",
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <div style="text-align: center; margin-bottom: 24px;">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663429873569/7oWSVrPVGVtdZF4r8qdB6x/logo-white_1f2ffe27.webp"
                      alt="Mr. Ashkelon"
                      style="height: 60px; background: #1a2744; padding: 10px 20px; border-radius: 8px;"
                    />
                  </div>
                  <h2 style="color: #1a2744; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">
                    Thank You, ${name}!
                  </h2>
                  <p style="color: #444; line-height: 1.6;">
                    Thank you for reaching out to Mr. Ashkelon. I have received your message and will be in touch with you shortly.
                  </p>
                  <p style="color: #444; line-height: 1.6;">
                    In the meantime, feel free to call or WhatsApp me directly:
                  </p>
                  <ul style="color: #444; line-height: 2;">
                    <li><strong>Israel:</strong> <a href="tel:054-731-2118" style="color: #1a2744;">054-731-2118</a></li>
                    <li><strong>USA:</strong> <a href="tel:1-612-424-5387" style="color: #1a2744;">1-612-424-5387</a></li>
                  </ul>
                  <div style="margin-top: 24px; padding: 16px; background: #f0e8d0; border-left: 4px solid #c9a84c; border-radius: 4px;">
                    <p style="margin: 0; color: #1a2744; font-style: italic;">
                      "Making your property journey in Israel smooth, professional, and stress-free."
                    </p>
                    <p style="margin: 8px 0 0; color: #666; font-size: 13px;">— Motti Yitzhack, Mr. Ashkelon</p>
                  </div>
                  <p style="margin-top: 24px; color: #999; font-size: 12px; border-top: 1px solid #eee; padding-top: 12px;">
                    Mr. Ashkelon Real Estate Brokers · Hatayassim St., Ashkelon 78573, Israel<br/>
                    <a href="https://mrashkelon.com" style="color: #c9a84c;">mrashkelon.com</a>
                  </p>
                </div>
              `,
            });

            console.log(`[Contact] Notification sent to motti@mrashkelon.com, auto-reply sent to ${email} — page: ${sourcePage}`);
          } catch (err) {
            console.error("[Contact] Resend email failed:", err);
          }
        } else {
          console.warn("[Contact] RESEND_API_KEY not set, skipping email");
        }

        // Also send in-app Manus notification as supplement (optional — may not be configured on VPS)
        try {
          await notifyOwner({
            title: `New Contact Form Submission from ${name} — ${sourcePage}`,
            content: notificationContent,
          });
        } catch (err) {
          console.warn("[Contact] notifyOwner skipped (not configured):", (err as Error).message);
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
