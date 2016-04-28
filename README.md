# eslint-config-rubiconproject

The Rubicon Project's Shareable ESLint Config

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Rules
Importantly:
 - **Four (4) space tabs.**
 - **Semicolons.**
 - Checkout [feross/standard] for the rest of the rules.

## Installation
```
$ npm install --save-dev eslint-config-rubiconproject
```
**Note that a `postinstall` script will install all of the required `peerDependencies`.**

## Usage
In your project `package.json` add the following:
```json
{
  "scripts": {
    "test": "eslint ."
  },
  "eslintConfig": {
    "extends": [
      "rubiconproject"
    ]
  }
}
```

Note that you may also specify you eslintConfig in an `.eslintrc`:

```json
{
  "extends": [
    "rubiconproject"
  ]
}
```

## Ignoring files
Ignore files within an `.eslintignore`:

```bash
dist/
foo/baz.js
```

## Specifying globals
See: http://eslint.org/docs/user-guide/configuring#specifying-globals

## Ignoring rules inline
See: http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments

## Specifying environments (such as Test)
See: http://eslint.org/docs/user-guide/configuring#specifying-environments

[feross/standard]: http://standardjs.com/rules.html
