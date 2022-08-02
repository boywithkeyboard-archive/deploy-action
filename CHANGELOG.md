# Changelog

## v0.1.16

* ci: decrease frequency of dependabot updates
* refactor: migrate to azury's style guide
* refactor: use `node:` imports

## v0.1.15

### Changes

* refactor: rename org
* refactor: remove unnecessary options from package.json
* refactor: migrate to azury's style guide

## v0.1.14

### Dependencies

* [**#26**](https://github.com/azurystudio/deploy-action/pull/26) - chore(deps-dev): bump `esbuild` from **v0.14.50** to **v0.14.51**
* [**#27**](https://github.com/azurystudio/deploy-action/pull/27) - chore(deps-dev): bump `@types/node` from **v18.6.1** to **v18.6.2**

## v0.1.13

### Changes

* docs: add contact section to readme

### Dependencies

* chore(deps-dev): bump @typescript-eslint/eslint-plugin (#23)
* chore(deps-dev): bump @typescript-eslint/parser from 5.30.7 to 5.31.0 (#24)
* chore(deps): bump node-ssh from 12.0.5 to 13.0.0 (#25)

## v0.1.12

* fix: publish issue

## v0.1.11

### New Features

* feat: add `directory` option

  Upload a whole directory instead of a single file.

## v0.1.10

### Dependencies

* chore(deps-dev): bump @types/node from 18.0.6 to 18.6.1 (#20)
* chore(deps-dev): bump @types/ssh2 from 1.11.4 to 1.11.5 (#21)
* chore(deps-dev): bump node-ssh from 12.0.4 to 12.0.5 (#22)

## v0.1.9

### New Features

* feat: add support for multiple files

  If the `dist` directory contains multiple files, upload all files to the remote host.

### Changes

* build: add `rimraf`

  Add `rimraf` to make sure unused files get removed.

* build: migrate from `ncc` to `esbuild`

* ci: increase frequency of dependabot updates

## v0.1.8

### Changes

* renamed readme, license, and changelog 
* bumped `eslint` from **8.19.0** to **8.20.0** in [#16](https://github.com/azurystudio/deploy-action/pull/16)
* bumped `@typescript-eslint/parser` from **5.30.6** to **5.30.7** in [#17](https://github.com/azurystudio/deploy-action/pull/17)
* bumped `@types/node` from **18.0.3** to **18.0.6** in [#18](https://github.com/azurystudio/deploy-action/pull/18)
* bumped `@typescript-eslint/eslint-plugin` from **5.30.6** to **5.30.7** in [#19](https://github.com/azurystudio/deploy-action/pull/19)

## v0.1.7

### Dependencies

- upgraded `@typescript-eslint/parser` to **5.30.6** in [#12](https://github.com/azurystudio/deploy-action/pull/12)
- upgraded `@types/ssh2` to **1.11.4** in [#13](https://github.com/azurystudio/deploy-action/pull/13)
- upgraded `@types/node` to **18.0.3** in [#14](https://github.com/azurystudio/deploy-action/pull/14)
- upgraded `@typescript-eslint/eslint-plugin` to **5.30.6** in [#15](https://github.com/azurystudio/deploy-action/pull/15)

## v0.1.6

### Dependencies

- upgraded `@typescript-eslint/parser` to **5.30.5** in [#9](https://github.com/azurystudio/deploy-action/pull/9)
- upgraded `@types/node` to **18.0.1** in [#10](https://github.com/azurystudio/deploy-action/pull/10)
- upgraded `@typescript-eslint/eslint-plugin` to **5.30.5** in [#11](https://github.com/azurystudio/deploy-action/pull/11)

## v0.1.5

### Dependencies

- upgraded `eslint` to **8.19.0** in [#8](https://github.com/azurystudio/deploy-action/pull/8)

## v0.1.4

### Changes

- reduced frequency of dependabot updates

### Dependencies

- upgraded `@typescript-eslint/parser` to **5.30.3** in [#5](https://github.com/azurystudio/deploy-action/pull/5)
- upgraded `@types/ssh2` to **1.11.2** in [#6](https://github.com/azurystudio/deploy-action/pull/6)
- upgraded `@typescript-eslint/eslint-plugin` to **5.30.3** in [#7](https://github.com/azurystudio/deploy-action/pull/7)

## v0.1.3

### Dependencies

- upgraded `@types/ssh2` to **1.11.0** in [#3](https://github.com/azurystudio/deploy-action/pull/3)

## v0.1.2

### Changes

- made workflow more flexible

### Dependencies

- upgraded `@typescript-eslint/parser` to **5.30.0** in [#1](https://github.com/azurystudio/deploy-action/pull/1)
- upgraded `@typescript-eslint/eslint-plugin` to **5.30.0** in [#2](https://github.com/azurystudio/deploy-action/pull/2)

## v0.1.0

### New Features

- added `file` option to deploy a different file than `dist/index.js`

## v0.0.4

### Bug Fixes

- fixed path to dist/index.js

## v0.0.3

- replaced `esbuild` with `@vercel/ncc`

## v0.0.2

### Bug Fixes

- fixed boolean input
- fixed esm issue

## v0.0.1

### Bug Fixes

- set engine to `node16`

## v0.0.0

Released `azurystudio/deploy` action.
