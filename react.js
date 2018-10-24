module.exports = {
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/sort-comp': [1, { order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render'] }],
        'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
        'react/jsx-curly-brace-presence': [2, { props: 'always', children: 'never' }],
        'react/prefer-stateless-function': 0, // it should be converter by transpiler
        'jsx-a11y/label-has-for': 0, // still rules have some kidn of bug. Label have set for, but lint throws an error.
    },
    plugins: [
        'react',
    ],
};
