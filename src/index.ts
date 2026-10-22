/**
 * Counts the number of words in a string.
 *
 * This function counts words by splitting on a separator (default is space).
 * It handles multiple consecutive separators correctly and trims whitespace.
 *
 * @param text - The text to count words in
 * @param separetor - The separator between words (default: " ")
 * @returns The number of words found in the text
 *
 * @example
 * ```ts
 * countWords("Hello World"); // 2
 * countWords("Hey, my name is Eliaz."); // 5
 * countWords("  Hello    World  "); // 2
 * countWords(""); // 0
 * countWords("apple,banana,orange", ","); // 3
 * ```
 */
export function countWords(text: string, separetor = " "): number {
  let count = 1;

  // TODO: @ultirequiem should be able to remove this working with state
  // This is fasth enough tho
  text = text.trim();

  if (text.length === 0) {
    return 0;
  }

  let previous = "";

  for (const chunk of text) {
    const prev = previous;

    previous = chunk;

    if (chunk !== separetor) {
      continue;
    } else {
      if (prev === chunk) {
        continue;
      }
    }

    count++;
  }

  return count;
}
