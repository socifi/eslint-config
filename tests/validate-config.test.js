const eslint = require('eslint');
const fs = require('fs');
const path = require('path');

const importModules = (dir) => {
    const files = fs.readdirSync(dir);

    const returnValue = {};

    files.forEach((file) => {
        const stem = path.basename(file).replace(/\.\w+$/, '');
        const fullPath = path.join(dir, file);

        if (path.extname(file) !== '.js') {
            return;
        }

        // eslint-disable-next-line import/no-dynamic-require,global-require
        returnValue[stem] = require(fullPath);
    });

    return returnValue;
};

// import-modules uses require.extensions but it is not supported by jest
// this will mock the function and import modules
// this is for unicorn eslint and typescript eslint
jest.setMock('import-modules', importModules);

function getErrors(configFile) {
    const { CLIEngine } = eslint;

    const cli = new CLIEngine({
        configFile,
    });

    return cli.executeOnText(fs.readFileSync('./index.js', 'utf8'));
}

describe('Validate configs by eslint', () => {
    ['index.js', 'react.js', 'jasmine.js', 'jest.js', 'babel-resolver.js'].forEach((file) => {
        it(`load config ${file} in eslint to validate all rule syntax is correct`, () => {
            expect(getErrors(file).results[0].messages).toEqual([]);
        });
    });
});
