import { describe, expect, it } from "vitest";
import { siteUrl } from "../site-url";

describe("siteUrl", () => {
  it("builds a canonical URL without duplicate slashes", () => {
    expect(siteUrl("/products/bmw-m-carbon")).toBe(
      "https://evestime.com/products/bmw-m-carbon",
    );
  });
});
