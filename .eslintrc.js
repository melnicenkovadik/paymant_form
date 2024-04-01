module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', 'unused-imports', '@typescript-eslint', 'simple-import-sort'],

  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-unresolved': 'error',
  },
  globals: {
    React: 'writable',
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-return-await': 'warn',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(scss)$'],
            ],
          },
        ],
        'no-unused-vars': 'off',
        'no-void': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/semi': ['off'],
        '@typescript-eslint/consistent-type-imports': 'off',
        'multiline-ternary': ['off'],
        '@typescript-eslint/no-explicit-any': 'off', // todo remove
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/no-unknown-property': 'off',
        'react/no-unescaped-entities': 'off',
        '@next/next/no-img-element': 'off',
        'react-hooks/exhaustive-deps': 'off',
        // allow promise-function-async
        'no-async-promise-executor': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        // 'react/jsx-props-no-spreading': 'off',

        curly: ['error', 'multi-line'],
        // "vue/max-attributes-per-line": ["error", {
        //   "singleline": 1,
        //   "multiline": 1,
        // }],
        // "space-before-function-paren": ["error", "never"],
        'comma-dangle': ['off'],
        'no-console': 'off',
        'no-undef': 'off',
        indent: 'off',
        'import/no-named-as-default': 'off',
        '@typescript-eslint/indent': 'off',
        camelcase: ['off'],
        'array-callback-return': 'off',
        'no-return-assign': 'off',
        'import/named': 'off', // because of import { BigNumberish, BytesLike } from "ethers"
      },
    },
  ],
  ignorePatterns: ['**/*.d.ts', 'node_modules/', '.next/', '_templates/', 'public/', 'web3/'],
}
