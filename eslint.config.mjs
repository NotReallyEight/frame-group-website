// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import nextVitals from "eslint-config-next/core-web-vitals";
import eslintPluginPrettierRecommended from "eslint-config-prettier";

export default defineConfig(
  nextVitals,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactRefresh.configs.recommended,
  {
    rules: {
      "import/no-unresolved": "off",
    },
  },
  eslintPluginPrettierRecommended
);
