module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [1, {
      extensions: [
        '.ts',
        '.tsx',
      ],
    }],
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 0,
    'react/style-prop-object': 0,
    'react/prop-types': 0,
  },
};
