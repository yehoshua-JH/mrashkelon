import { describe, it, expect } from "vitest";
import { Resend } from "resend";

describe("Resend API key validation", () => {
  it("should successfully connect to Resend API with the provided key", async () => {
    const apiKey = process.env.RESEND_API_KEY;
    expect(apiKey, "RESEND_API_KEY must be set").toBeTruthy();

    const resend = new Resend(apiKey);

    // Use the domains list endpoint to validate the key without sending an email
    const { data, error } = await resend.domains.list();

    expect(error, `Resend API error: ${JSON.stringify(error)}`).toBeNull();
    expect(data).toBeDefined();
    console.log("[Resend] API key valid. Domains:", data?.data?.map((d: { name: string }) => d.name));
  }, 15000);
});
