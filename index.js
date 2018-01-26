module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
    ],
    rules: {
        'indent': [2, 4],
        'max-len': [2, 140],
        'no-console': 'warn',
        'complexity': [1, 6],
        'max-depth': [2, 5],
        'max-lines': [1],
        'max-params': [2, 4],
        'max-nested-callbacks': [2, 5],
        'max-statements': [1, 25],
        'max-statements-per-line': [2, {'max': 2}],
        'jsdoc/check-param-names': 1,
        'jsdoc/check-tag-names': 1,
        'jsdoc/check-types': 1,
        'jsdoc/newline-after-description': 1,
        'jsdoc/require-description-complete-sentence': 0,
        'jsdoc/require-hyphen-before-param-description': 1,
        'jsdoc/require-param': 1,
        'jsdoc/require-param-description': 1,
        'jsdoc/require-param-type': 1,
        'jsdoc/require-returns-description': 1,
        'jsdoc/require-returns-type': 1,
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'compat/compat': 2,
        'jsx-a11y/href-no-hash': 0, // Definition for rule 'jsx-a11y/href-no-hash' was not found
        'arrow-body-style': 0, // return statement sometimes needs to be surrounded by {}
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
        },
    },
    env: {
        'es6': true,
        'browser': true,
    },
    plugins: [
        'import',
        'jsdoc',
        'promise',
        'compat',
        'flowtype',
    ],
    settings: {
        flowtype: {
            'onlyFilesWithFlowAnnotation': false,
        },
        'import/resolver': {
            'babel-module': {},
        },
    },
};
