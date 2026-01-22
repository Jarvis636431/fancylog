import { describe, expect, it, vi } from "vitest";
import { combo, multi } from "../src/core";

describe("combo/multi", () => {
  it("multi concatenates segments with a gap", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    multi(
      [
        { text: "A", options: { color: "red" } },
        { text: "B", options: { color: "blue" } },
      ],
      { gap: " | " }
    );
    expect(spy).toHaveBeenCalledTimes(1);
    const [format] = spy.mock.calls[0];
    expect(format).toBe("%cA | %cB");
    spy.mockRestore();
  });

  it("combo formats two segments", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    combo("INFO", "Started");
    expect(spy).toHaveBeenCalledTimes(1);
    const [format, style1, style2] = spy.mock.calls[0];
    expect(format).toBe("%cINFO %cStarted");
    expect(typeof style1).toBe("string");
    expect(typeof style2).toBe("string");
    spy.mockRestore();
  });
});
