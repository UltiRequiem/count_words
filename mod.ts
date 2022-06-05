export function countWords(text: string, separetor = " "): number {
  if (text.length === 0) {
    return 0;
  }

  let count = 1;

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
