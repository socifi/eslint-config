# Change Log
All notable changes to this project will be documented in this file.

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
