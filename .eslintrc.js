module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['plugin:@next/next/core-web-vitals', '../common/.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX,
    },
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
    projectFolderIgnoreList: ['node_modules', 'dist', 'build', '.yarn', 'docs', './src/generated/*', 'generated/*'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      processor: '@graphql-eslint/graphql',
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': 'warn',
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      extends: 'plugin:@graphql-eslint/schema-recommended',
      rules: {
        'prettier/prettier': 'warn',
      },
    },
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
