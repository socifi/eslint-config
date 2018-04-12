# ESLint Config SOCIFI

[![npm version](https://badge.fury.io/js/%40socifi%2Feslint-config-socifi.svg)](https://badge.fury.io/js/%40socifi%2Feslint-config-socifi)

This is default ESlint configurations for projects in SOCIFI.

## Usage

First install the package:

```nodemon
npm install @socifi/eslint-config-socifi --save-dev
```

and update you ESLint configuration:

```javascript
module.exports = {
    extends: [
        '@socifi',
    ],
};

```

In basic configuration following plugins are included:

- **import** - We use ECMAScript 6 modules.
- **jsdoc** - Predefined style for comments of methods.
- **promise** - Predefined style for promises.
- **compat** - To check that used features are supported by certain browsers.
- **flowtype** - We use static analysis tool Flow.

There are more extendable configurations for tests or different envs:

```javascript
module.exports = {
    extends: [
        '@socifi',
        '@socifi/eslint-config/react',
        '@socifi/eslint-config/jasmine',
        '@socifi/eslint-config/jest',
        '@socifi/eslint-config/babel-resolver',
    ],
};
```
