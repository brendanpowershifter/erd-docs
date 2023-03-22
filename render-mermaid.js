"use strict";
import { readdirSync } from "node:fs";
import { parse } from "node:path";
import { run } from "@mermaid-js/mermaid-cli";
const defaultInputDir = "./src";
const defaultOutputDir = "./build";
const renderMermaid = async (input = defaultInputDir, output = defaultOutputDir) => {
  const files = readdirSync(input);
  for (const file of files) {
    await run(`./src/${file}`, `./renders/${parse(file).name}.svg`);
  }
};
renderMermaid();
