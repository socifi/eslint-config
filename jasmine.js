module.exports = {
    extends: ['plugin:jasmine/recommended'],
    plugins: [
        'jasmine',
    ],
    env: {
        jasmine: true,
    },
    rules: {
        'compat/compat': 0, // do not check for browser support
        'promise/no-callback-in-promise': 0,
    },
};
