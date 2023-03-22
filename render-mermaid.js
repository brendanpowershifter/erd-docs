"use strict";
import { readdirSync, readFileSync } from "node:fs";
import { parse } from "node:path";
import { run } from "@mermaid-js/mermaid-cli";
const defaultInputDir = "./src";
const defaultOutputDir = "./build";
const renderMermaid = async (input = defaultInputDir, output = defaultOutputDir) => {
  const styles = readFileSync("./style.css", "utf-8");
  const files = readdirSync(input);
  for (const file of files) {
    await run(`./src/${file}`, `./renders/${parse(file).name}.svg`, { parseMMDOptions: { backgroundColor: "transparent", myCSS: styles } });
  }
};
renderMermaid();
