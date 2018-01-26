module.exports = {
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/sort-comp': [1, {order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render']}],
    },
    plugins: [
        'react',
    ],
};
