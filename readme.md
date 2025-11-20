# Count Words

[![Code Coverage](https://codecov.io/gh/UltiRequiem/count_words/branch/main/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/count_words)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/count_words/mod.ts)

A lightweight JavaScript/TypeScript library to count words in a string. It
handles multiple consecutive spaces correctly and is Unicode-aware.

## Features

- ✨ Simple and intuitive API
- 🚀 Fast and efficient word counting
- 🔧 Handles multiple consecutive spaces
- 🌍 Unicode-aware
- 📦 Works with Deno, Node.js, and browsers
- 🎯 Zero dependencies

## Quick Start

### [Deno 🦕](https://deno.land/x/count_words)

```typescript
import { countWords } from "https://deno.land/x/count_words/mod.ts";

console.log(countWords("Hello World")); // 2
console.log(countWords("The quick brown fox")); // 4
```

### [Node.js 🐢🚀](https://npmjs.com/package/count-n-words)

```javascript
import { countWords } from "count-n-words";

console.log(countWords("Hello World")); // 2
console.log(countWords("The quick brown fox")); // 4
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

```html
<script type="module">
  import { countWords } from "https://cdn.skypack.dev/count-n-words";

  console.log(countWords("Hello World")); // 2
</script>
```

**Other CDN options:**

- [SkyPack](https://cdn.skypack.dev/count-n-words)
- [JSDelivr](https://cdn.jsdelivr.net/npm/count-n-words)

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

## Documentation

Full API documentation is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/count_words/mod.ts) 📄

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

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
