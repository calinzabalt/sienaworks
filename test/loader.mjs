import { readFileSync } from "node:fs";
import path from "node:path";
import { ModuleKind, ScriptTarget, transpileModule } from "typescript";

export async function resolve(specifier, context, nextResolve) {
  if (
    (specifier.startsWith("./") || specifier.startsWith("../")) &&
    path.extname(specifier) === ""
  ) {
    return nextResolve(`${specifier}.ts`, context);
  }

  return nextResolve(specifier, context);
}

export async function load(url, context, nextLoad) {
  if (url.endsWith(".ts")) {
    const source = readFileSync(new URL(url), "utf8");
    const output = transpileModule(source, {
      compilerOptions: {
        module: ModuleKind.ESNext,
        target: ScriptTarget.ES2022,
      },
    });

    return {
      format: "module",
      source: output.outputText,
      shortCircuit: true,
    };
  }

  return nextLoad(url, context);
}
