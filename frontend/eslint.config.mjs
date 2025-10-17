// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist", "build", "node_modules", "wailsjs"] },

  {
    files: ["**/*.{ts,tsx}"],

    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },

    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: "es5",
          printWidth: 100,
          arrowParens: "always",
          bracketSpacing: true,
          endOfLine: "lf",
        },
      ],

      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off",
    },
  }
);
