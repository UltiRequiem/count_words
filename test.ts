import { countWords } from "./mod.ts";

import { assertEquals } from "https://deno.land/std@0.150.0/testing/asserts.ts";

Deno.test("Main", () => {
  assertEquals(countWords("Hey, my name is Eliaz."), 5);

  assertEquals(countWords("Hello World"), 2);

  assertEquals(countWords("Hey"), 1);
});

Deno.test("Manages Spaces", () => {
  assertEquals(countWords("  Hey  "), 1);

  assertEquals(countWords("Hello        World"), 2);
});

Deno.test("No Words", () => {
  assertEquals(countWords(""), 0);

  assertEquals(countWords("   "), 0);
});
