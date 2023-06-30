module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-indent': ['error', 2],
    'react/prop-types': 'warn',
    'react/no-unescaped-entities': 'warn',
    'no-shadow': 'warn',
    'no-else-return': 'warn',
    'no-empty-pattern': 'error',
    'no-use-before-define': ['error', { 'functions': false, 'classes': true }]
  }
};
