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
    },
};

