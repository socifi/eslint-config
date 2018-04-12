const eslint = require('eslint');
const fs = require('fs');

// import-modules uses require.extensions but it is not supported by jest
jest.mock('import-modules', () => {
    return (dir) => {
        const fs = require('fs');
        const path = require('path');
        const files = fs.readdirSync(dir);

        const returnValue = {};

        for (const file of files) {
            const stem = path.basename(file).replace(/\.\w+$/, '');
            const fullPath = path.join(dir, file);

            if (path.extname(file) !== '.js') {
                continue;
            }

            returnValue[stem] = require(fullPath);
        }

        return returnValue;
    };
});

function getErrorCount(configFile) {
    const CLIEngine = eslint.CLIEngine;

    const cli = new CLIEngine({
        useEslintrc: false,
        configFile: configFile,
    });

    return cli.executeOnText(fs.readFileSync('./index.js', 'utf8'));
}

describe('Validate configs by eslint', () => {
    ['index.js', 'react.js', 'jasmine.js', 'jest.js', 'babel-resolver.js'].forEach((file) => {
        it(`load config ${file} in eslint to validate all rule syntax is correct`, () => {
            expect(getErrorCount(file).results[0].messages).toEqual([]);
        });
    });
});
