import { describe, it, expect } from "vitest";
import { SupabaseTelemetryStream } from "../src";

describe("SupabaseTelemetryStream", () => {
  it("should create an instance with default options", () => {
    const instance = new SupabaseTelemetryStream();
    expect(instance).toBeDefined();
  });

  it("should accept custom options", () => {
    const instance = new SupabaseTelemetryStream({ verbose: true });
    expect(instance).toBeDefined();
  });

  it("should run successfully", async () => {
    const instance = new SupabaseTelemetryStream();
    const result = await instance.run();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
  });
});
