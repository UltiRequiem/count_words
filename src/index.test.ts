import { expect, it } from "vitest";
import { countWords } from "./index.js";

it("Main", () => {
  expect(countWords("Hey, my name is Eliaz.")).toEqual(5);

  expect(countWords("Hello World")).toEqual(2);

  expect(countWords("Hey")).toEqual(1);
});

it("Manages Spaces", () => {
  expect(countWords("  Hey  ")).toEqual(1);

  expect(countWords("Hello        World")).toEqual(2);
});

it("No Words", () => {
  expect(countWords("")).toEqual(0);

  expect(countWords("   ")).toEqual(0);
});
