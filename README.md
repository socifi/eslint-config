# ESLint Config SOCIFI

This is default eslint configurations for projects in SOCIFI.

## Usage

First install the package:

```nodemon
npm install eslint-config-socifi --save-dev
```

and update you ESLint configuration:

```javascript
module.exports = {
    extends: [
        'socifi',
    ],
};

```

In basic configuration following plugins are included:

- **import** - We use ECMAScript 6 modules.
- **jsdoc** - Predefined style for comments of methods.
- **promise** - Predefined style for promises.
- **compat** - To check that used features are supported by certain browsers.
- **flowtype** - We use static analysis tool Flow.

There are two extendable configurations:

```javascript
module.exports = {
    extends: [
        'socifi',
        'socifi/react',
        'socifi/jasmine',
        'socifi/jest',
    ],
};
```
