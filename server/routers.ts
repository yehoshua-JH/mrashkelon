import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

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

        // Send notification to owner via Manus notification service
        const title = `New Contact Form Submission from ${name}`;
        const content = [
          `**Name:** ${name}`,
          phone ? `**Phone:** ${phone}` : null,
          `**Email:** ${email}`,
          `**Message:**\n${message}`,
        ]
          .filter(Boolean)
          .join("\n\n");

        // Also send email via the built-in Forge email API
        try {
          const forgeApiUrl = process.env.BUILT_IN_FORGE_API_URL ?? "";
          const forgeApiKey = process.env.BUILT_IN_FORGE_API_KEY ?? "";
          if (forgeApiUrl && forgeApiKey) {
            const emailEndpoint = new URL(
              "webdevtoken.v1.WebDevService/SendEmail",
              forgeApiUrl.endsWith("/") ? forgeApiUrl : `${forgeApiUrl}/`
            ).toString();
            await fetch(emailEndpoint, {
              method: "POST",
              headers: {
                accept: "application/json",
                authorization: `Bearer ${forgeApiKey}`,
                "content-type": "application/json",
                "connect-protocol-version": "1",
              },
              body: JSON.stringify({
                to: "0537530310A@gmail.com",
                subject: `New Enquiry from ${name} — Mr. Ashkelon`,
                body: `New contact form submission:\n\nName: ${name}\nPhone: ${phone || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message}`,
              }),
            });
          }
        } catch (err) {
          console.warn("[Contact] Email send failed, falling back to notification:", err);
        }

        // Always send in-app notification as fallback/supplement
        await notifyOwner({ title, content });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
