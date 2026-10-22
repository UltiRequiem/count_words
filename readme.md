# Count Words

[![npm](https://img.shields.io/npm/v/@ultirequiem/count-words?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/count-words)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/count-words?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/count-words)
[![CI](https://github.com/UltiRequiem/count_words/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/count_words/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/count_words/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/count_words)

A lightweight JavaScript/TypeScript library to count words in a string. It
handles multiple consecutive spaces correctly and is Unicode-aware.

## Quick Start

```typescript
import { countWords } from "@ultirequiem/count-words";

console.log(countWords("Hello World")); // 2
console.log(countWords("The quick brown fox")); // 4
```

## API Reference

### `countWords(text: string, separator?: string): number`

Counts the number of words in a string.

#### Parameters

- `text` (string): The text to count words in
- `separator` (string, optional): The separator between words. Defaults to `" "`
  (space)

#### Returns

- (number): The number of words found in the text

#### Examples

```typescript
// Basic usage
countWords("Hello World"); // 2
countWords("Hey, my name is Eliaz."); // 5

// Handles multiple spaces
countWords("Hello        World"); // 2
countWords("  Hey  "); // 1

// Empty strings
countWords(""); // 0
countWords("   "); // 0

// Custom separator
countWords("apple,banana,orange", ","); // 3
```

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/count_words/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/count_words/tags) 🏷️

## Licence

Licensed under the MIT License 📄
