module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
    ],
    rules: {
        indent: [2, 4],
        'max-len': [2, 140],
        'no-console': 'warn',
        complexity: [1, 6],
        'max-depth': [2, 5],
        'max-lines': [1],
        'max-params': [2, 5],
        'max-nested-callbacks': [2, 5],
        'max-statements': [1, 25],
        'max-statements-per-line': [2, { max: 2 }],
        'arrow-body-style': 0, // return statement sometimes needs to be surrounded by {}
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // allow ++ syntax for for each cycle
        'class-methods-use-this': 0, // Do not require this in class methods
        'jsdoc/check-param-names': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/newline-after-description': 1,
        'jsdoc/require-description-complete-sentence': 0,
        'jsdoc/require-hyphen-before-param-description': 1,
        'jsdoc/require-param-description': 0,
        'jsdoc/require-param': 0,
        'jsdoc/require-param-type': 0,
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 0, // type is defined by flow
        'promise/avoid-new': 0,
        'promise/always-return': 1,
        'promise/no-return-wrap': 1,
        'promise/param-names': 1,
        'promise/catch-or-return': 2,
        'promise/no-promise-in-callback': 1,
        'promise/no-callback-in-promise': 1,
        'compat/compat': 2,
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/href-no-hash': 0, // Definition for rule 'jsx-a11y/href-no-hash' was not found
        'import/prefer-default-export': 0, // In some cases it is not need
        'flowtype/no-flow-fix-me-comments': 2,
        'unicorn/filename-case': 0,
        'filenames/match-exported': 2,
        'array-func/from-map': 2,
        'array-func/no-unnecessary-this-arg': 2,
        'array-func/prefer-array-from': 2,
        'array-func/avoid-reverse': 2,
        'no-underscore-dangle': 0, // _ can be user for private methods
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
        'jsdoc',
        'promise',
        'compat',
        'flowtype',
        'unicorn',
        'filenames',
        'array-func',
    ],
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: false,
        },
    },
};
