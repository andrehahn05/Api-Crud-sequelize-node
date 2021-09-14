module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends:[
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'consistent-return': 'off',
    'import/first': 'off',
  },
  
};
