# Change Log
All notable changes to this project will be documented in this file.

## [2.10.2] 2020-02-20
### Fixed
- Some new default values from updated libraries.

## [2.10.1] 2020-02-20
### Fixed
- Use typescript linting even for tsx

## [2.10.0] 2019-10-21
### Changed
- Better handling of ts vs js files

## [2.9.0] 2019-10-08
### Changed
- Update libraries.

## [2.8.0] 2019-05-30
### Changed
- Updated dependencies

## [2.7.1] 2019-02-27
### Fixed
- Lints for typescript

## [2.7.0] 2019-02-14
### Changed
- Update to the latest typescript plugin

## [2.6.1] 2019-01-23
### Fixed
- There was a problem with parser, no empty interface rule has to be disabled

## [2.6.0] 2019-01-22
### Changed
- Update version of dependencies

## [2.5.0] 2018-12-01
### Changed
- Supress warning about dupe methods because of typescript

## [2.4.0] 2018-12-01
### Changed
- Disable some lints for unit tests

## [2.3.0] 2018-11-28
### Changed
- Allow namespaces in typescript lint

## [2.2.0] 2018-11-27
### Added
- Sonar that detects smelly code

## [2.1.0] 2018-11-23
### Changed
- Disable some rules and upgrade packages.

## [2.0.1] 2018-10-31
### Fixed
- Added missing rules for Typescript.

## [2.0.0] 2018-10-24
### Changed
- Migrate from Flow to Typescript BREAKING

## [1.10.0] 2018-06-15
### Changed
- [DAS-6](https://socifi.atlassian.net/browse/DAS-6) Make flow fix only warning.

## [1.9.0] 2018-06-11
### Changed
- [RND-14](https://socifi.atlassian.net/browse/RND-14) Disable rules no-underscore-dangle and jsdoc/require-returns-type

## [1.8.1] 2018-04-23
### Fixed
- Maintenence release that fix version mismash [RND-9](https://socifi.atlassian.net/browse/RND-9)

## [1.8.0] 2018-04-23
### Changed
- [RND-9](https://socifi.atlassian.net/browse/RND-9) Use context in circleci

## [1.7.0] 2018-04-17
### Added
- Added testing via circleci and automatic publishing

## [1.6.2] 2018-04-12
### Added
- Add peer dependency

## [1.6.0] 2018-04-12
### Added
- Add new rules for filenames
- Add unicorn plugin
- Add array func plugin
- Add tests
- Add automatic deploy

### Changed
- Move to socifi scope in npm

## [1.5.0] 2018-03-21
### Changed
- Turn off some jsdocs warn. It is no need to define variable type in docs since we are using flow definitions.

## [1.4.0] 2018-02-27
### Changed
- Separated babel resolver to own config set.

## [1.3.0] 2018-02-07
### Added
- Add support for Jest.

## [1.2.0] 2018-02-01
### Changed
- Update rules for react.

### Removed
- Remove flowtype-errors dependency.

### Fixed
- Fix missing babel-eslint dependency.

## [1.1.0] 2018-01-29
### Changed
- Allow ++ syntax for for each cycle.
- Do not require this in class methods.

## [1.0.0] 2018-01-26
- Initial commit
