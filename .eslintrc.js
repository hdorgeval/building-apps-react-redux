module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    document: true,
    window: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'import'],
  root: true,
  rules: {
    'no-debugger': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx', '.css', '.scss'],
    react: {
      version: 'detect',
    },
  },
};
