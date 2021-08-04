module.exports = {
  extends: ['eslint-config-react-app'],
  plugins: ['import'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      },
    ],
  },
};
