import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner helper so tests don't hit external services
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock fetch so the email API call doesn't fail in test env
vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("returns success for a valid submission", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.contact.submit({
      name: "Test User",
      phone: "054-000-0000",
      email: "test@example.com",
      message: "I am interested in a property.",
      sourcePage: "Genesis Jerusalem Page",
    });
    expect(result).toEqual({ success: true });
  });

  it("throws validation error when name is empty", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        message: "Hello",
      })
    ).rejects.toThrow();
  });

  it("throws validation error when email is invalid", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.contact.submit({
        name: "Test",
        email: "not-an-email",
        message: "Hello",
      })
    ).rejects.toThrow();
  });

  it("throws validation error when message is empty", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.contact.submit({
        name: "Test",
        email: "test@example.com",
        message: "",
      })
    ).rejects.toThrow();
  });
});
