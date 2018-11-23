module.exports = {
    parser: 'typescript-eslint-parser',
    extends: [
        'airbnb',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'plugin:jsx-a11y/recommended',
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
        'typescript/adjacent-overload-signatures': 2,
        'typescript/class-name-casing': 2,
        'typescript/explicit-function-return-type': [2, { allowExpressions: true }],
        'typescript/explicit-member-accessibility': 2,
        'typescript/interface-name-prefix': 2,
        'typescript/member-delimiter-style': [2, { delimiter: 'comma' }],
        'typescript/member-naming': 2,
        'typescript/no-angle-bracket-type-assertion': 2,
        'typescript/no-array-constructor': 2,
        'typescript/no-empty-interface': 2,
        'typescript/no-inferrable-types': 2,
        'typescript/no-namespace': 2,
        'typescript/no-non-null-assertion': 2,
        'typescript/no-parameter-properties': 2,
        'typescript/no-triple-slash-reference': 2,
        'typescript/no-unused-vars': 2,
        'typescript/no-use-before-define': 2,
        'typescript/no-var-requires': 2,
        'typescript/prefer-namespace-keyword': 2,
        'typescript/type-annotation-spacing': 2,
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
        'unicorn',
        'filenames',
        'array-func',
        'typescript',
    ],
};
