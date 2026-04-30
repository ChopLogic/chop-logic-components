# Chop Logic Components

![Chop Logic](public/logo.jpeg)

#### Code Quality Checks
[![CI](https://github.com/ChopLogic/chop-logic-components/actions/workflows/ci.yml/badge.svg)](https://github.com/ChopLogic/chop-logic-components/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/ChopLogic/chop-logic-components/graph/badge.svg?token=0M1IKB16FN)](https://codecov.io/gh/ChopLogic/chop-logic-components)
[![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FChopLogic%2Fchop-logic-components%2Fmain)](https://dashboard.stryker-mutator.io/reports/github.com/ChopLogic/chop-logic-components/main)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ChopLogic_chop-logic-components&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ChopLogic_chop-logic-components)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

#### Deployments
[![GitHub Pages](https://github.com/ChopLogic/chop-logic-components/actions/workflows/github-pages.yml/badge.svg)](https://github.com/ChopLogic/chop-logic-components/actions/workflows/github-pages.yml)
[![NPM](https://github.com/ChopLogic/chop-logic-components/actions/workflows/npm.yml/badge.svg)](https://github.com/ChopLogic/chop-logic-components/actions/workflows/npm.yml)

#### Standards
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Keep a changelog](https://img.shields.io/badge/Keep%20a%20changelog-1.1.0-E05735?logo=keep-a-changelog&labelColor)](https://keepachangelog.com/en/1.1.0/)
[![Semantic versioning](https://img.shields.io/badge/SemVer-2.0.0-3F4551?logo=semver&labelColor)](https://semver.org/spec/v2.0.0)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to **Chop Logic Components**, a React components library packed with a variety of **styled
components** and **custom hooks** that are easy to integrate into any React project.

## 📚 About This Library

Chop Logic Components follows **Atomic Design** principles with **Fully Typed TypeScript** components. All styling uses **pure CSS with CSS variables** (BEM naming convention with `cl-` prefix) for consistent theming across light and dark modes. Built for developer productivity with comprehensive [Storybook documentation](https://choplogic.github.io/chop-logic-components) and accessibility-first approach.

## ✨ Features

Chop Logic is designed to speed up development by providing reusable, accessible, and highly customizable components.
Whether you're building complex forms, creating dynamic layouts, or managing component logic with hooks, Chop Logic
Components has the tools to make it easier.

## 🔗 Links

- [NPM package](https://www.npmjs.com/package/chop-logic-components)
- [Playground](https://choplogic.github.io/chop-logic-components)
- [Changelog](CHANGELOG.md)

## Quality assurance

Automated checks include [**CI**](https://github.com/ChopLogic/chop-logic-components/actions/workflows/ci.yml)
(typecheck, lint, unit tests, library build, Storybook test runner), [**Codecov**](https://codecov.io/gh/ChopLogic/chop-logic-components),
[**SonarCloud**](https://sonarcloud.io/summary/new_code?id=ChopLogic_chop-logic-components), and scheduled
[**mutation testing**](https://dashboard.stryker-mutator.io/reports/github.com/ChopLogic/chop-logic-components/main).
Contributor workflow and coverage expectations are described in [CONTRIBUTING.md](CONTRIBUTING.md); architectural
decisions are recorded under [docs/adr/](docs/adr/).

## 📦 Installation

To get started with Chop Logic, install it via npm or yarn:

```bash
npm install chop-logic-components
# or
yarn add chop-logic-components
```

## 📜 Available NPM Scripts

| Script            | Description                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `start`           | Starts Storybook in development mode on port `6006` without opening a browser.                                                                        |
| `build`           | Builds the TypeScript types and compiles the library using Vite.                                                                                      |
| `build:storybook` | Builds a static version of Storybook into the `storybook-static` directory.                                                                           |
| `prepare`         | Runs the production build and sets up Husky git hooks.                                                                                                |
| `format`          | Formats all files using both Biome (for JS/TS) and Prettier (for MD/MDX).                                                                          |
| `format:biome`    | Formats JS, TS, JSON, and CSS files using Biome.                                                                                                      |
| `format:prettier` | Formats MD and MDX files using Prettier.                                                                                                           |
| `lint`            | Runs both Biome and Prettier linters to check code style and quality.                                                                                 |
| `lint:biome`      | Runs Biome linter on JS/TS files.                                                                                                                    |
| `lint:prettier`   | Checks formatting of MD and MDX files using Prettier.                                                                                              |
| `lint:errors`     | Shows only error-level diagnostics from Biome (limited to 100 issues).                                                                                |
| `lint:warnings`   | Shows only warning-level diagnostics from Biome (limited to 100 issues).                                                                              |
| `lint:fix`        | Automatically fixes Biome issues where possible.                                                                                                      |
| `typecheck`       | Performs a full type check without emitting output.                                                                                                   |
| `test`            | Runs unit tests using Vitest in watch mode (interactive).                                                                                             |
| `test:ci`         | Runs tests once in CI mode and allows empty test sets.                                                                                                |
| `test:integration` | Builds Storybook and runs the Storybook test runner (Playwright) against static output—integration smoke tests.                                     |
| `coverage`        | Runs tests and generates a coverage report using Vitest.                                                                                              |
| `test:mutation`   | Runs mutation testing using Stryker to verify test quality.                                                                                           |
| `release:version` | Bumps the version (`patch`, `minor`, or `major`), commits the change, creates a Git tag, and pushes to `main`. Usage: `npm run release:version patch` |

## 🛠 Contributing

Contributions are welcome! If you find a bug or have an idea for improvement, feel free to open an issue or submit a
pull request. Please check the [Contribution guide](CONTRIBUTING.md) for additional info.

1. Fork the repository.
2. Clone your fork.
3. Create a new feature branch.
4. Implement and test your changes.
5. Submit a pull request!

---

Let's build better logic tools together! 🚀
