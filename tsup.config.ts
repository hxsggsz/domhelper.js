import { defineConfig } from "tsup";

export default defineConfig({
  dts: true, // Generate .d.ts files
  minify: false, // Minify output
  sourcemap: false, // Generate sourcemaps
  treeshake: true, // Remove unused code
  splitting: true, // Split output into chunks
  clean: true, // Clean output directory before building
  outDir: "dist", // Output directory
  entry: ["src/domhelper.ts"], // Entry point(s)
  format: ["esm", "cjs"], // Output format(s)
});
