import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },

  // ADD THIS OVERRIDE:
  {
    files: ["tests/**/*.js", "**/*.test.js"],  // target your test files
    env: {
      jest: true,  // enable Jest globals (test, expect, etc)
    },
  },
]);
