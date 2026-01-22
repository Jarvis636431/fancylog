import { describe, expect, it } from "vitest";
import { renderAscii } from "@/ascii";

describe("renderAscii", () => {
  it("renders known glyphs with 7 lines", () => {
    const art = renderAscii("A");
    const lines = art.split("\n");
    expect(lines).toHaveLength(7);
    expect(art).toContain("#######");
  });

  it("supports lowercase and symbols", () => {
    const art = renderAscii("a!");
    expect(art).toContain("#");
  });
});
