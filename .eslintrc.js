module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-lines': ['error', 500], // 此规则为每个文件强制执行最多行数，以帮助维护和降低复杂性。
    'max-depth': ['error', 4], // 此规则强制执行嵌套块的最大深度，以降低代码复杂度。
    'max-nested-callbacks': ['error', 3], //此规则强制执行最大深度，可以嵌套回调以提高代码清晰度。
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
