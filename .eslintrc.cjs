module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      0,
      { allowConstantExport: true },
    ],
    "indent": ['error', 2],
    'no-tabs': 'error',
    // "indent": ["error", 2, { "SwitchCase": 1 }],
    "quotes": ["error", "single"],
    "semi": 0,
    // "no-console": "warn",
    "block-spacing": ["error", "always"],
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/no-unused-vars": ["warn", { "vars": "local" }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/triple-slash-reference": 0
  },
}
