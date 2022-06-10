import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node.ts";

buildPackage({
  repoName: "count_words",
  name: "count-n-words",
  description: "Count words in string, fastly and Unicode aware.",
  keywords: ["query", "url"],
  license: "MIT",
  version: "1.2.0",
});
