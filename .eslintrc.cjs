module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:vue/recommended',
    'plugin:prettier-vue/recommended',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'parser': '@babel/eslint-parser',
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
    }
  },
  'plugins': [
    'vue',
    'prettier',
  ],
  'rules': {
    'prettier-vue/prettier': [
      2,
      {
        trailingComma: 'all',
        singleQuote: true,
        semi: true,
        arrowParens: 'avoid',
      },
    ],
  }
};
