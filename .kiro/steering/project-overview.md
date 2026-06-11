# Chop Logic Components — Project Overview

## Identity

Chop Logic Components is a React 19 component library following **Atomic Design** methodology. It provides reusable, accessible, and customizable UI components with full TypeScript support, pure CSS styling using BEM naming with a `cl-` prefix, and CSS variable-based theming (light/dark).

## Source Layout

| Area | Path |
|------|------|
| Atoms | `src/components/atoms/` |
| Molecules | `src/components/molecules/` |
| Organisms | `src/components/organisms/` |
| HOCs | `src/components/hocs/` |
| Contexts | `src/components/contexts/` |
| Hooks | `src/hooks/` |
| Styles (design tokens) | `src/styles/main.css`, `src/styles/icons.css` |
| Icons (SVG) | `src/assets/icons/` |
| Shared types | `src/types/` |
| Enums | `src/enums/` |
| Utilities | `src/utils/` |
| Storybook config | `.storybook/` |
| Build scripts | `scripts/` |

## Key Conventions

- **Atomic Design hierarchy:** atoms → molecules → organisms
- **TypeScript:** All components, hooks, and utilities are strongly typed
- **CSS + BEM:** Pure CSS with `cl-` prefix BEM naming; CSS variables from `src/styles/main.css`
- **Theming:** Light (default in `:root`) and dark (`.cl-components-dark-theme` on `documentElement`)
- **Accessibility:** Semantic HTML, ARIA attributes, keyboard support (Enter/Space), focus management
- **Functional components + hooks:** No class components
- **Biome.js:** Linting and formatting for JS/TS/CSS/JSON (indentStyle: space, indentWidth: 2, lineWidth: 100, singleQuotes, semicolons)
- **Prettier:** Only for MD/MDX files
- **`getClassName`** utility from `@utils` for conditional BEM class composition

## File Naming

| Kind | Pattern | Example |
|------|---------|---------|
| Components | `PascalCase.tsx` | `Search.tsx` |
| Hooks | `camelCase.ts` | `useDebounce.ts` |
| Utilities | `camelCase.ts` | `getClassName.ts` |
| Styles | `Component.css` | `Search.css` |
| Tests | `__tests__/Component.test.tsx` | `__tests__/Search.test.tsx` |
| Stories | `__docs__/Component.stories.tsx` | `__docs__/Search.stories.tsx` |
| Docs | `__docs__/Component.docs.mdx` | `__docs__/Search.docs.mdx` |
| Example wrapper | `__docs__/Component.example.tsx` | `__docs__/Search.example.tsx` |

## NPM Scripts

| Goal | Command |
|------|---------|
| Library build | `npm run build` |
| Storybook dev | `npm start` |
| Storybook static build | `npm run build:storybook` |
| Unit tests (CI) | `npm run test:ci` |
| Lint (check) | `npm run lint` |
| Lint (auto-fix) | `npm run lint:fix` |
| Type check | `npm run typecheck` |
| Format | `npm run format` |
| Coverage | `npm run coverage` |
| Integration tests | `npm run test:integration` |
| Mutation tests | `npm run test:mutation` |

## Git Conventions

- **Commits:** Conventional Commits — types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
- **Branches:** `feat/*` for features, `fix/*` for bug fixes
- **PRs:** Focused scope, link issues, CI must be green
- Pre-commit hooks enforce type checking, linting, formatting, and tests via `lint-staged`

## Dependencies

- **React 19** (peer dependency)
- **Vite** for builds with `vite-plugin-dts` and `vite-plugin-lib-inject-css`
- **Vitest** + **React Testing Library** for unit tests
- **Storybook 10** for documentation and visual testing
- **Stryker** for mutation testing
