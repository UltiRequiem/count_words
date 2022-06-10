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
