# Chop Logic Components

![Chop Logic](public/logo.jpeg)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://github.com/ChopLogic/chop-logic-components/actions/workflows/github-pages.yml/badge.svg)](https://github.com/ChopLogic/chop-logic-components/actions/workflows/github-pages.yml)
[![codecov](https://codecov.io/gh/ChopLogic/chop-logic-components/graph/badge.svg?token=0M1IKB16FN)](https://codecov.io/gh/ChopLogic/chop-logic-components)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ChopLogic_chop-logic-components&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ChopLogic_chop-logic-components)
[![NPM](https://github.com/ChopLogic/chop-logic-components/actions/workflows/npm.yml/badge.svg)](https://github.com/ChopLogic/chop-logic-components/actions/workflows/npm.yml)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Code Style: Prettier](https://img.shields.io/badge/Code_Style-Prettier-ff69b4.svg?style=flat)](https://prettier.io)
[![Keep a changelog](https://img.shields.io/badge/Keep%20a%20changelog-1.1.0-E05735?logo=keep-a-changelog&labelColor)](https://keepachangelog.com/en/1.1.0/)
[![Semantic versioning](https://img.shields.io/badge/SemVer-2.0.0-3F4551?logo=semver&labelColor)](https://semver.org/spec/v2.0.0)

buhtz
on Oct 14, 2024

Interesting. The first use case for a badge that make sense to me. How do you count unreleased changes? Number of commit since the last release tag? Or commits with a specific tag (e.g. feat: commit msg) or entries in the first section (unreleased) of the CHANGELOG?
charphi
on Oct 14, 2024

I'm just counting the entries in the first section (unreleased) of the CHANGELOG.md


Welcome to **Chop Logic Components**, a React components library packed with a variety of **styled
components** and **custom hooks** that are easy to integrate into any React project.

## ✨ Features

Chop Logic is designed to speed up development by providing reusable, accessible, and highly customizable components.
Whether you're building complex forms, creating dynamic layouts, or managing component logic with hooks, Chop Logic
Components has the tools to make it easier.

## 🔗 Links

- [Storybook Playground](https://choplogic.github.io/chop-logic-components)
- [Changelog](CHANGELOG.md)
- [NPM package](https://www.npmjs.com/package/chop-logic-components)

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
| `format`          | Formats all files using both Biome (for JS/TS) and Prettier (for SCSS/MDX).                                                                          |
| `format:biome`    | Formats JS, TS, JSON, and MD files using Biome.                                                                                                      |
| `format:prettier` | Formats SCSS and MDX files using Prettier.                                                                                                           |
| `lint`            | Runs both Biome and Prettier linters to check code style and quality.                                                                                 |
| `lint:biome`      | Runs Biome linter on JS/TS files.                                                                                                                    |
| `lint:prettier`   | Checks formatting of SCSS and MDX files using Prettier.                                                                                              |
| `lint:errors`     | Shows only error-level diagnostics from Biome (limited to 100 issues).                                                                                |
| `lint:warnings`   | Shows only warning-level diagnostics from Biome (limited to 100 issues).                                                                              |
| `lint:fix`        | Automatically fixes Biome issues where possible.                                                                                                      |
| `typecheck`       | Performs a full type check without emitting output.                                                                                                   |
| `test`            | Runs unit tests using Vitest in watch mode (interactive).                                                                                             |
| `test:ci`         | Runs tests once in CI mode and allows empty test sets.                                                                                                |
| `coverage`        | Runs tests and generates a coverage report using Vitest.                                                                                              |
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
