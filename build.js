import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  format: "iife",
  globalName: "ChaiWindCSS",
  outfile: "dist/chaiwindcss.js",
});

await esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  format: "iife",
  globalName: "ChaiWindCSS",
  outfile: "dist/chaiwindcss.min.js",
});

console.log("Built dist/chaiwindcss.js and dist/chaiwindcss.min.js");
