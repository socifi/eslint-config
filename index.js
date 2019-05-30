/* eslint-disable max-len */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:sonarjs/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: [
                    'node_modules',
                    'src',
                ],
                extensions: [
                    '.js',
                    '.ts',
                    '.tsx',
                ],
            },
        },
        polyfills: [
            'fetch',
            'promises',
        ],
    },
    rules: {
        indent: [2, 4],
        'max-len': [2, 140],
        'no-console': 'warn',
        complexity: [1, 6],
        curly: [2, 'all'],
        'max-depth': [2, 5],
        'max-lines': [1],
        'max-params': [2, 5],
        'max-nested-callbacks': [2, 5],
        'max-statements': [1, 25],
        'max-statements-per-line': [2, { max: 2 }],
        'arrow-body-style': 0, // return statement sometimes needs to be surrounded by {}
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // allow ++ syntax for for each cycle
        'class-methods-use-this': 0, // Do not require this in class methods
        'promise/avoid-new': 0,
        'promise/always-return': 1,
        'promise/no-return-wrap': 1,
        'promise/param-names': 1,
        'promise/catch-or-return': 2,
        'promise/no-promise-in-callback': 1,
        'promise/no-callback-in-promise': 1,
        'promise/prefer-await-to-callbacks': 2,
        'promise/prefer-await-to-then': 2,
        'compat/compat': 2,
        'unicorn/no-abusive-eslint-disable': 0, // sometimes it's just need
        'import/prefer-default-export': 0, // In some cases it is not need
        'unicorn/filename-case': 0,
        'filenames/match-exported': 2,
        'array-func/from-map': 2,
        'array-func/no-unnecessary-this-arg': 2,
        'array-func/prefer-array-from': 0, // I don't like it
        'array-func/avoid-reverse': 2,
        'unicorn/catch-error-name': [2, { name: 'exception' }],
        'no-empty-function': 0, // you need this to implement some interfaces
        'no-underscore-dangle': 0, // _ can be user for private methods
        'import/extensions': [2, { ts: 'never', tsx: 'never' }],
        'no-undef': 0, // conflict with typescript plugin
        'no-restricted-globals': 0, // conflict with typescript plugin
        'global-require': 0, // conflict with typescript plugin
        'no-unused-vars': 0, // conflict with typescript plugin
        'import/no-dynamic-require': 0, // we need dynamic import of chunks...
        'jsx-a11y/anchor-is-valid': 0, // rule does not exist
        'no-dupe-class-members': 0, // dont work for typescript
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-namespace': 0,
        'no-useless-constructor': 0, // sometimes its handy
        'no-param-reassign': 0, // for decorators it's handy
        'unicorn/prevent-abbreviations': 0,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/member-delimiter-style': [2, {
            multiline: {
                delimiter: 'comma',
                requireLast: true,
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false,
            },
        }],
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
        },
    },
    env: {
        es6: true,
        browser: true,
    },
    plugins: [
        'import',
        'promise',
        'compat',
        'unicorn',
        'filenames',
        'array-func',
        '@typescript-eslint',
        'sonarjs',
    ],
};
