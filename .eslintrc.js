module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: [
    "prettier",
    "standard",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "eslint-config-prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "sonarjs", "@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  rules: {
    "prefer-promise-reject-errors": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    camelcase: "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  overrides: [
    {
      files: "*.spec.[tj]s",
      rules: {
        "no-import-assign": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
};
