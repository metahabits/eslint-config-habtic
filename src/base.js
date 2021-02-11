exports.extends = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
];

exports.plugins = [
  '@typescript-eslint'
];

exports.rules = {};

exports.baseReact = {
  parser: '@typescript-eslint/parser',
  reportUnusedDisableDirectives: true,

  extends: this.extends,

  plugins: [
    ...this.plugins,
    'react',
  ],

  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2021: true,
  },

  globals: this.globals,

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  settings: {
    ...this.settings,

    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
  },

  rules: this.rules,
};
