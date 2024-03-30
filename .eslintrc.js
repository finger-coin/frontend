const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        es6: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'linebreak-style': 'off',
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'no-console': 'off',
        // prettier/prettier by default looks into .prettierrc and "merge" rules with eslint
        // however tabWidth is not working in this case, PhpStorm show errors, so we need to set it explicitly here
        // bug of PhpStorm, probably
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
            },
        ],
        // we want Protocol namespace

        'import/no-default-export': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/naming-convention': 'off',
        // we want to throw new ApiError
        '@typescript-eslint/no-throw-literal': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-key': 'error',
        'react/no-danger': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        'jsx-a11y/label-has-for': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/order': 'off',
        // Override airbnb config to allow for/of
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    },
    overrides: [
        {
            files: ['vite.config.ts'],
            parserOptions: {
                project: './tsconfig.node.json',
            },
            rules: {
                'import/no-default-export': 'off',
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
});
