/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        printWidth: 120
      }
    ],
    'no-extra-semi': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
