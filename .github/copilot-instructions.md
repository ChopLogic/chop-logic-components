# AI Coding Agent Instructions for Chop Logic Components

This document provides essential guidelines for AI coding agents.

## Project Overview
Chop Logic Components is a React component library designed to provide reusable, accessible, and customizable components. The library includes:
- **Atoms, Molecules, and Organisms**: Organized following the Atomic Design methodology.
- **Custom Hooks**: Utilities for managing component logic.
- **Theming and Contexts**: Support for dynamic styling and shared state management.
- **SCSS Variables**: Centralized styling variables for consistent theming.
- **SCSS Mixins**: Support for reusable styles and responsive design.


Key directories:
- `src/atoms/`: Basic building blocks (e.g., `Button`, `Icon`, `Image`).
- `src/molecules/`: Composed components (e.g., `TextInput`, `MultiSelect`, `Breadcrumbs`).
- `src/organisms/`: High-level components (e.g., `Form`, `Grid`, `Dialog`).
- `src/hooks/`: Custom hooks (e.g., `use-tooltip-position`, `use-key-press`).
- `src/styles/`: SCSS files for common and reusable rules, such as themes, typography, mixins, and variables.
- `src/utils/`: Utility functions (e.g., `get-class-name.ts`).

## Developer Workflows
### Building and Testing
- **Build the library**: `npm run build`
- **Run Storybook**: `npm start` (development mode) or `npm run build:storybook` (static build).
- **Run tests**: `npm run test:ci` (CI mode).
- **Check code quality**: `npm run lint` (all linters) or `npm run typecheck` (type checking).
- **Generate coverage report**: `npm run coverage`

### Formatting and Linting
- **Format code**: `npm run format` (Biome + Prettier).
- **Fix lint issues**: `npm run lint:fix`

## Project-Specific Conventions
1. **Atomic Design**: Follow the `atoms`, `molecules`, `organisms` hierarchy for component organization.
2. **TypeScript**: All components and utilities are strongly typed. Use `src/models/` for shared type definitions.
3. **Styling**: Use SCSS modules in `src/styles/`. Variables and mixins are defined in `src/styles/variables/` and `src/styles/mixins/`.
4. **Testing**: Write unit tests using Vitest and React Testing Library. Place test files alongside the components they test in `__tests__` folder. A test file should ne called `Component.test.tsx`.
5. **Icons**: Use `src/assets/icons/` for SVG assets. Reference them in `src/enums/icon-name.ts`.

### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `Search.tsx`)
- Hooks: `camelCase.ts` (e.g., `useDebounce.ts`)
- Utilities: `camelCase.ts` (e.g., `getClassName.ts`)
- Styles: `Component.module.scss`
- Tests: `__tests__/Component.test.tsx`
- Stories: `__docs__/Component.stories.tsx`
- Documentation: `__docs__/Component.docs.mdx`
- Component example: `__docs__/Component.example.tsx`

## Specific Guidelines
### Libraries and Tools
- Use React 19 features and best practices
- Mock external dependencies in tests
- Use SCSS mixins for reusable styles
- Avoid writing code that violates Biome.js rules

### Interactive Components
- Support Space and Enter keys
- Provide focus management
- Include proper ARIA roles
- Handle loading and error states

### Layout Components
- Use semantic HTML
- Support responsive design
- Maintain accessibility hierarchy
- Provide flexible sizing options

---

For more details, refer to the [README.md](../README.md) and [CONTRIBUTING.md](../CONTRIBUTING.md).