# Contributing to Chop Logic Components

Thank you for your interest in contributing to **Chop Logic**! We appreciate your help in improving and maintaining this
project. Before you get started, please read through the guidelines below to ensure a smooth contribution process.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Submitting Pull Requests](#submitting-pull-requests)
  - [Feature Requests](#feature-requests)
- [Development Workflow](#development-workflow)
- [Commit Rules](#commit-rules)
- [Branch Names](#branch-names)
- [Coding Guidelines](#coding-guidelines)
- [Testing](#testing)
- [License](#license)

## Code of Conduct

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive environment for everyone.

## How to Contribute

### Reporting Issues

If you encounter a bug, performance issue, or have a suggestion for improvement, please open an issue in
our [GitHub issue tracker](https://github.com/ChopLogic/chop-logic-components/issues) with the following details:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected vs. actual behavior.
- Environment details (e.g., OS, browser, Chop Logic version).
- Any relevant screenshots or logs.

### Submitting Pull Requests

1. **Fork the repository** and create a new branch:

   ```sh
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes**, ensuring they align with our [coding guidelines](#coding-guidelines).

3. **Run tests** locally before submitting:

   ```sh
   npm run test
   ```

4. **Commit your changes** with a meaningful message
   following [Conventional Commits](https://www.conventionalcommits.org/):

   ```sh
   git commit -m "feat: add new button variant"
   ```

5. **Push your changes** to your forked repository:

   ```sh
   git push origin feat/your-feature-name
   ```

6. **Open a pull request (PR)** against the `main` branch and fill in the provided PR template.

#### Pull Request Guidelines

- Keep your PR focused and concise.
- Link related issues in your PR description.
- Ensure CI checks pass before requesting a review.
- Document new features or changes in Storybook if applicable.

### Feature Requests

We welcome feature requests! Please open an issue and describe:

- The problem you're trying to solve.
- Potential API suggestions.
- Any related discussion or examples.

## Development Workflow

1. Clone the repository:

   ```sh
   git clone git@github.com:SavouryGin/chop-logic-components.git
   cd chop-logic-components
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start development server:

   ```sh
   npm start
   ```

4. Make changes and test using Storybook.

## Commit Rules

We enforce [Conventional Commits](https://www.conventionalcommits.org/) to maintain a consistent commit history. A
pre-commit hook is set up to lint commit messages, and commits that do not follow the correct format will be rejected.

Commit message structure:

```
type(scope): description

Example:
feat: add primary variant
fix: correct validation logic
```

Allowed commit types:

- `feat`: A new feature (triggers a minor version bump)
- `fix`: A bug fix (triggers a patch version bump)
- `chore`: Routine tasks or dependency updates
- `docs`: Documentation updates
- `refactor`: Code changes that do not fix a bug or add a feature
- `test`: A new unit test or tests refactoring

## Branch Names

Our workflow automates npm versioning based on the branch name. Please use the following branch name conventions:

- `feat/*` – Increments **minor** version (e.g., `feat/new-component` → `1.x.0`)
- `fix/*` – Increments **patch** version (e.g., `fix/button-bug` → `1.0.x`)
- `release/*` – Increments **major** version (e.g., `release/v2.0` → `2.0.0`)

## Coding Guidelines

Please follow these guidelines to maintain code consistency:

- Follow the project's existing coding style (ESLint and Prettier).
- Write clear and concise documentation.
- Prefer functional components and hooks.
- Use TypeScript for type safety.
- Keep components reusable and accessible.

## Testing

We use **Vitest** and **React Testing Library** for testing. Ensure all tests pass before submitting changes:

```sh
npm run test
```

Write tests for new components and features to maintain quality and prevent regressions.

## License

By contributing to Chop Logic, you agree that your contributions will be licensed under the [MIT](LICENSE) license.

---

Thanks for contributing to Chop Logic! Your support helps us create a better, more reusable component library for
everyone.
