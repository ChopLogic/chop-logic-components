# AI Coding Agent Instructions for Chop Logic Components

This document provides essential guidelines for AI coding agents.

## Project Overview
Chop Logic Components is a React component library designed to provide reusable, accessible, and customizable components. The library includes:
- **Atoms, Molecules, and Organisms**: Organized following the Atomic Design methodology.
- **Custom Hooks**: Utilities for managing component logic.
- **Theming and Contexts**: Support for dynamic styling and shared state management.
- **CSS Variables**: Centralized styling variables in `main.css` for consistent theming across light and dark modes.
- **BEM Methodology**: Component styles follow Block Element Modifier (BEM) naming conventions with `cl-` prefix.

  
Key directories:
- `src/assets/`: Static assets like icons (e.g., SVG files).
- `src/components/atoms/`: Basic building blocks (e.g., `Button`, `Icon`, `Image`).
- `src/components/molecules/`: Composed components (e.g., `TextInput`, `MultiSelect`, `Breadcrumbs`).
- `src/components/organisms/`: High-level components (e.g., `Form`, `Grid`, `Dialog`).
- `src/components/hocs/`: Higher-order components (e.g., `withTooltip()`).
- `src/components/contexts/`: React contexts for shared state (e.g., `ThemeContext`, `FormContext`).
- `src/hooks/`: Custom hooks (e.g., `use-tooltip-position`, `use-key-press`).
- `src/styles/`: SCSS files for common and reusable rules, such as themes, typography, mixins, and variables.
- `src/enums/`: Enumerations (e.g., `button-view.ts`).
- `src/types/`: Shared TypeScript type definitions (e.g., `alert.ts`).
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
3. **CSS & BEM Styling**: Use pure CSS files with BEM naming convention. See the [CSS & BEM](#css--bem-styling) section below.
4. **Testing**: Write unit tests using Vitest and React Testing Library. Place test files alongside the components they test in `__tests__` folder. A test file should ne called `Component.test.tsx`.
5. **Icons**: Use `src/assets/icons/` for SVG assets. Reference them in `src/enums/icon-name.ts`.

### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `Search.tsx`)
- Hooks: `camelCase.ts` (e.g., `useDebounce.ts`)
- Utilities: `camelCase.ts` (e.g., `getClassName.ts`)
- Styles: `Component.css` (pure CSS with BEM naming)
- Tests: `__tests__/Component.test.tsx`
- Stories: `__docs__/Component.stories.tsx`
- Documentation: `__docs__/Component.docs.mdx`
- Component example: `__docs__/Component.example.tsx`

## CSS & BEM Styling

### Overview
Chop Logic Components uses pure CSS with BEM (Block Element Modifier) methodology.

### BEM Naming Convention

The BEM methodology with `cl-` prefix (Chop Logic) is used throughout:

```
.cl-block-name__element-name_modifier-name_modifier-value
```

**Rules:**
- Names are written in **lowercase Latin letters**
- Words are separated by **hyphens** (`-`)
- The block name defines the **namespace** for its elements and modifiers
- The element name is separated from the block name by **double underscore** (`__`)
- The modifier name is separated by **single underscore** (`_`)
- The modifier value is separated by **single underscore** (`_`)
- For boolean modifiers, the value is **not included** in the name

**Example: Image Component**
```css
/* Block - Main component */
.cl-image { }

/* Elements - Parts of the component */
.cl-image__img { }
.cl-image__fallback { }
.cl-image__fallback-icon { }
.cl-image__fallback-text { }

/* Modifiers - State variations */
.cl-image_disabled { }
.cl-image__img_loading { }
```

**Usage in React:**
```tsx
import './Image.css';
import { getClassName } from '@utils';

// Use getClassName helper to combine classes
const imgClass = getClassName(['cl-image__img', { 'cl-image_disabled': isDisabled }]);

return <img className={imgClass} />;
```

### main.css - Design Tokens & Theme Variables

The `src/main.css` file contains all CSS variables that components should use for consistent theming and styling. Components should reference these variables instead of hard-coded values.

### Theme Switching

The library supports light and dark themes using CSS variable overrides:

**Light Theme (Default):**
- Automatically applied in `:root`

**Dark Theme:**
- Applied when `.cl-components-dark-theme` class is present
- JavaScript: `document.documentElement.classList.add('cl-components-dark-theme')`

## Specific Guidelines
### Libraries and Tools
- Use React 19 features and best practices
- Mock external dependencies in tests
- Use CSS variables from `main.css` for consistent theming
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