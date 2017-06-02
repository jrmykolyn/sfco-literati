# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.0] - 2017-06-02
### Added
- Added [ESLint](http://eslint.org/) to project development dependencies.
- Added [Mocha](https://mochajs.org/) test framework to project development dependencies.
- Built out tests for `literati#read()` (`test/read.test.js`).
- Added `CHANGELOG` file to project.
- Added `.editorconfig` and `.eslintrc.js` files to project.
- Added `literati#append()` method to module (`lib/append.js`).
- Built out tests for `literati#append()` (`test/append.test.js`).
- Integrated [Travis CI](https://travis-ci.org/) into project.
- Added [Instanbul](https://istanbul.js.org/) to project project via `nyc`.
- Integrated [Coveralls](https://coveralls.io/) into project.
- Added `Travis CI` and `Coveralls` badges to `README` file.

### Changed
- Updated `package.json` to run Mocha tests on `npm test`.
