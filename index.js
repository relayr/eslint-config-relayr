module.exports = {
  extends: ['google', 'eslint:recommended'],
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  rules: {
    // off
    'no-implicit-coercion': 'off',
    'no-multiple-empty-lines': 'off',

    // warn
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'no-process-exit': 'warn',
    'arrow-spacing': 'warn',
    'space-before-blocks': 'warn',
    'keyword-spacing': 'warn',
    "indent": ['warn', 2, {"SwitchCase": 1}],
    "key-spacing": ['warn', {"beforeColon": false, "afterColon": true, "mode": "minimum"}],
    "comma-spacing": ['warn', { "before": false, "after": true }],

    // error
    'no-var': 'error',
    'prefer-const': 'error',
    'semi': ['error', 'never'],
    'max-len': ['error', 140, 4],
    'generator-star-spacing': ['error', {before: true, after: false}],
    'quotes': ['error', 'single'],
    'strict': ['error', 'global'],
    'object-curly-spacing': ['error', 'never'],
    'new-cap': [
      'error',
      {
        'capIsNewExceptions': [
          'DataTypes.ARRAY',
          'DataTypes.STRING',
          'Sequelize.ARRAY',
          'Sequelize.STRING',
          'DataTypes.ENUM',
          'Sequelize.ENUM',
          's3Stream.WriteStream',
        ],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script',
  },
}
