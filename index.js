module.exports = {
    'plugins': [
        'react',
        'promise',
        'standard'
    ],
    'extends': [
        'standard',
        'standard-jsx'
    ],
    'rules': {
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'semi': ['error', 'always'],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'no-extra-semi': ['error']
    }
};
