# Chop Logic Components

[![License: MIT](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c34_License-MIT-blue.svg)](/LICENSE)
[![GitHub Pages](https://github.com/SavouryGin/chop-logic-components/actions/workflows/github-pages.yml/badge.svg)](https://github.com/SavouryGin/chop-logic-components/actions/workflows/github-pages.yml)
[![codecov](https://codecov.io/github/SavouryGin/chop-logic-components/graph/badge.svg?token=U5WF25WZTV)](https://codecov.io/github/SavouryGin/chop-logic-components)

Welcome to **Chop Logic Components**, a comprehensive React components library packed with a variety of **styled
components** and **custom hooks** that are easy to integrate into any React project.

## About the Library

Chop Logic is designed to speed up development by providing reusable, accessible, and highly customizable components.
Whether you're building complex forms, creating dynamic layouts, or managing component logic with hooks, Chop Logic
Components has the tools to make it easier.

## Links

- [Storybook Playground](https://savourygin.github.io/chop-logic-components)
- [Npm](https://www.npmjs.com/package/chop-logic-components)

## Getting Started

To get started with Chop Logic, install it via npm or yarn:

```bash
npm install chop-logic-components
# or
yarn add chop-logic-components
```

## Scripts

### `format`

Runs [Prettier](https://prettier.io/) to automatically format TypeScript files (`.ts` and `.tsx`) in the project. This
script will write changes directly to the files.

```bash
npm run format
```

### `lint`

Runs ESLint to analyze the TypeScript code for potential errors and enforce coding standards. It automatically fixes
issues where possible and uses the .gitignore file to ignore certain paths.

```bash
npm run lint
```

### `check-types`

Runs the TypeScript compiler (tsc) to perform type checking without generating output files. This script helps ensure
that the code adheres to TypeScript's type safety.

```bash
npm run check-types
```

### `build`

Compiles the TypeScript code into JavaScript using the TypeScript compiler (tsc) and then builds the project using Vite.

```bash
npm run build
```

### `test`

Runs unit tests using Vitest, a fast testing framework designed for Vite projects.

```bash
npm run test
```

### `test:ci`

Runs the tests in continuous integration (CI) mode with Vitest, providing a streamlined output suitable for automated
environments.

```bash
npm run test:ci
```

### `coverage`

Runs unit tests using Vitest and generates a code coverage report using the v8 generator.

```bash
npm run coverage
```

### `storybook`

Starts a local instance of Storybook for developing UI components. The Storybook interface will be available
at http://localhost:6006.

```bash
npm run storybook
```

### `build-storybook`

Builds the static version of the Storybook for deployment, outputting the files to the storybook-static directory. The
--quiet flag suppresses the build logs.

```bash
npm run build-storybook
```

### `prepare`

Runs the build script and then installs Husky hooks for managing Git hooks in the project.

```bash
npm run prepare
```
