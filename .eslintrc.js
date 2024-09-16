export const env = {
  browser: true,
  es6: true,
  node: true,
};
export const eslintExtends = [
  'eslint:recommended',
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
];
export const globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
};
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  ecmaVersion: 11,
  sourceType: 'module',
};
export const plugins = ['@typescript-eslint'];
export const rules = {
  '@typescript-eslint/no-empty-function': 'off',
  'prettier/prettier': ['off', { singleQuote: true }],
};