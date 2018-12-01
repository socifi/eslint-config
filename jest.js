module.exports = {
    extends: ['plugin:jest/recommended'],
    plugins: [
        'jest',
    ],
    env: {
        jest: true,
    },
    rules: {
        'compat/compat': 0, // do not check for browser support
        'promise/no-callback-in-promise': 0,
        'sonarjs/no-duplicate-string': 0, // no need for testing env
        'promise/catch-or-return': 0, // no need for testing env
    },
};
