# Chop Logic Components

![Chop Logic](public/logo.jpeg)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://github.com/SavouryGin/chop-logic-components/actions/workflows/github-pages.yml/badge.svg)](https://github.com/SavouryGin/chop-logic-components/actions/workflows/github-pages.yml)
[![codecov](https://codecov.io/github/SavouryGin/chop-logic-components/graph/badge.svg?token=U5WF25WZTV)](https://codecov.io/github/SavouryGin/chop-logic-components)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

Welcome to **Chop Logic Components**, a React components library packed with a variety of **styled
components** and **custom hooks** that are easy to integrate into any React project.

## ✨ Features

Chop Logic is designed to speed up development by providing reusable, accessible, and highly customizable components.
Whether you're building complex forms, creating dynamic layouts, or managing component logic with hooks, Chop Logic
Components has the tools to make it easier.

## 🔗 Links

- [Storybook Playground](https://savourygin.github.io/chop-logic-components)
- [NPM package](https://www.npmjs.com/package/chop-logic-components)

## 📦 Installation

To get started with Chop Logic, install it via npm or yarn:

```bash
npm install chop-logic-components
# or
yarn add chop-logic-components
```

## ⚙️ Available Scripts

### `start`

Starts a local instance of Storybook for developing UI components. The Storybook interface will be available
at http://localhost:6006.

```bash
npm start
```

### `build`

Compiles the TypeScript code into JavaScript using the TypeScript compiler (tsc) and then builds the project using Vite.

```bash
npm run build
```

### `build:storybook`

Builds the static version of the Storybook for deployment, outputting the files to the storybook-static directory. The
--quiet flag suppresses the build logs.

```bash
npm run build:storybook
```

### `prepare`

Runs the build script and then installs Husky hooks for managing Git hooks in the project.

```bash
npm run prepare
```

### `format`

Runs [Prettier](https://prettier.io/) to automatically format TypeScript files (`.ts` and `.tsx`) in the project. This
script will write changes directly to the files.

```bash
npm run format
```

### `lint`

Runs ESLint to analyze the code for potential errors and enforce coding standards.

```bash
npm run lint
```

### `lint:fix`

Runs ESLint and automatically fixes issues where possible.

```bash
npm run lint:fix
```

### `typecheck`

Run the TypeScript compiler (tsc) to perform type checking without generating output files. This script helps ensure
that the code adheres to TypeScript's type safety.

```bash
npm run typecheck
```

### `test`

Run unit tests using Vitest, a fast testing framework designed for Vite projects.

```bash
npm run test
```

### `test:ci`

Run the tests in continuous integration (CI) mode with Vitest, providing a streamlined output suitable for automated
environments.

```bash
npm run test:ci
```

### `coverage`

Run unit tests using Vitest and generates a code coverage report using the v8 generator.

```bash
npm run coverage
```

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
