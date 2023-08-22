module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import-helpers'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-plusplus': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^@nestjs/',
          '/^@prisma/',
          '/^@faker-js/',
          '/^@\/.+\/.+\.module$/',
          '/^@\/.+\/.+\.controller$/',
          '/^@\/.+\/.+\.service$/',
          '/^@\/.+\/.+\/.+\.dto$/',
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
