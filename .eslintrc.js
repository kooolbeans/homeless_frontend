module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-debugger": "warn",
    "no-extra-boolean-cast": "off",
    "no-unused-vars": "warn",
    "no-useless-catch": "off",
    "vue/no-unused-components": "off",
    "vue/multi-word-component-names": "off"
  },
};
