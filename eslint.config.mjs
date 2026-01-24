import nextConfig from "eslint-config-next";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const config = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...nextConfig,
  eslintConfigPrettier,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];

export default config;
