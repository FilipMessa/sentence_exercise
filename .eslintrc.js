module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'max-len': ['error', { code: 150 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': ['off'],
  },
};
