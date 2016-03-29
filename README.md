# eslint-config-rubiconproject

The Rubicon Project's Shareable ESLint Config

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

### Use with `eslint`

```
$ npm install --save-dev eslint \
  eslint-config-standard \
  eslint-config-standard-jsx \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-standard \
  eslint-config-rubiconproject
```

```json
{
  "scripts": {
    "test": "eslint ."
  },
  "eslintConfig": {
    "plugins": [
      "react",
      "promise",
      "standard"
    ],
    "extends": [
      "standard",
      "standard-jsx",
      "rubiconproject"
    ]
  }
}
```
