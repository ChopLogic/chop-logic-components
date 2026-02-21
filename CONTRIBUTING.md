# Contributing to Chop Logic Components

Thank you for your interest in contributing to **Chop Logic Components**! We appreciate your help in improving and maintaining this
project. Before you get started, please read through the guidelines below to ensure a smooth contribution process.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Commit Rules](#commit-rules)
- [Branch Names](#branch-names)
- [Coding Guidelines](#coding-guidelines)
- [Documentation Standards](#documentation-standards)
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

Please use the following branch name conventions:

- `feat/*` – For features and updates
- `fix/*` – For fixes and small tasks

## Coding Guidelines

Please follow these guidelines to maintain code consistency:

- Follow the project's existing coding style (Prettier for MD(X) files and Biome.js for everything else).
- Write clear and concise documentation.
- Prefer functional components and hooks.
- Use TypeScript for type safety.
- Keep components reusable and accessible.
- For AI assisted coding use `copilot-instructions.md` in `.github` folder.

### Key directories
- `src/assets/`: Static assets like icons (e.g., SVG files).
- `src/components/atoms/`: Basic building blocks (e.g., `Button`, `Icon`, `Image`).
- `src/components/molecules/`: Composed components (e.g., `TextInput`, `MultiSelect`, `Breadcrumbs`).
- `src/components/organisms/`: High-level components (e.g., `Form`, `Grid`, `Dialog`).
- `src/components/hocs/`: Higher-order components (e.g., `withTooltip()`).
- `src/components/contexts/`: React contexts for shared state (e.g., `ThemeContext`, `FormContext`).
- `src/hooks/`: Custom hooks (e.g., `use-tooltip-position`, `use-key-press`).
- `src/styles/`: Pure CSS files with CSS variables for theming, typography, and design tokens (main.css, icons.css).
- `src/enums/`: Enumerations (e.g., `button-view.ts`).
- `src/types/`: Shared TypeScript type definitions (e.g., `alert.ts`).
- `src/utils/`: Utility functions (e.g., `get-class-name.ts`).

### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `Search.tsx`)
- Hooks: `camelCase.ts` (e.g., `useDebounce.ts`)
- Utilities: `camelCase.ts` (e.g., `getClassName.ts`)
- Styles: `Component.css`
- Tests: `__tests__/Component.test.tsx`
- Stories: `__docs__/Component.stories.tsx`
- Documentation: `__docs__/Component.docs.mdx`
- Component example: `__docs__/Component.example.tsx`

### Base Component Structure
```typescript
import './Component.css';
import { getClassName } from '@utils';
import { FC } from 'react';

export interface ComponentProps extends ChopLogicComponentProps {
  // Required props first
  requiredProp: Type;
  // Optional props with defaults
  optionalProp?: Type;
  // Event handlers
  onChange?: (value: Type) => void;
}

const Component: FC<ComponentProps> = ({
  requiredProp,
  optionalProp = defaultValue,
  onChange,
  className,
  ...rest
}) => {
  const componentClass = getClassName([
    'cl-component',
    className,
    {
      'cl-component_disabled': isDisabled,
      'cl-component__modifier': condition,
    },
  ]);

  return (
    <div className={componentClass} {...rest}>
      {/* Component content */}
    </div>
  );
};

export default Component;
```

### Accessibility Requirements
```typescript
// ✅ Always include proper ARIA attributes
<div
  role="appropriate-role"
  aria-label={label}
  aria-describedby={descriptionId}
  tabIndex={disabled ? -1 : 0}
>

// ✅ Use semantic HTML elements
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
  </ol>
</nav>

// ✅ Support keyboard navigation
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    // Handle interaction
  }
};
```

### Styling Conventions

The library uses **pure CSS with BEM naming** and **CSS variables** for theming. Follow these patterns:

```css
/* Component.css - Use BEM naming with cl- prefix */

.cl-component {
  /* Base styles */
  color: var(--cl-primary-color);
  background-color: var(--cl-primary-background);
  padding: var(--cl-m-gap);
  border-radius: var(--cl-border-radius);
  font-family: var(--cl-core-font);
  font-size: var(--cl-base-font-size);
}

/* Element - part of component */
.cl-component__inner {
  display: flex;
  gap: var(--cl-s-gap);
}

/* Modifier - variation of component */
.cl-component_disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: var(--cl-shadow-background);
}

.cl-component_large {
  padding: var(--cl-l-gap);
  font-size: var(--cl-larger-font-size);
}

/* State - interaction state */
.cl-component:hover:not(.cl-component_disabled) {
  background-color: var(--cl-highlight-background);
}

.cl-component:focus {
  outline: 2px solid var(--cl-accent-color);
  outline-offset: 2px;
}

/* Dark theme support via CSS variables */
:root.cl-components-dark-theme .cl-component {
  color: var(--cl-primary-color); /* CSS variable overridden in dark theme */
  background-color: var(--cl-primary-background);
}
```

**Key Guidelines:**
- Use BEM naming: `.cl-block__element_modifier`
- Leverage CSS variables from `main.css` (colors, spacing, fonts, sizes)
- Avoid hard-coded values
- Support both light and dark themes via CSS variables
- Keep styles component-scoped in separate CSS files

### getClassName Utility

Use the `getClassName` utility for conditional class names. It accepts an array of strings and conditional objects:

```typescript
// Always use for conditional classes
const className = getClassName([
  'cl-component', // Base class
  className,      // User-provided classes
  {
    'cl-component_active': isActive,
    'cl-component_disabled': isDisabled,
    'cl-component__large': size === 'large',
  },
]);
```

This ensures proper class merging and prevents class name conflicts.

### Hook Development Pattern
```typescript
export const useCustomHook = (params: HookParams): HookReturn => {
  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    // Side effects
    return () => {
      // Cleanup
    };
  }, [dependencies]);
  
  return {
    state,
    actions,
  };
};
```

## Styling with CSS Variables

Always use CSS variables from `main.css` in your component styles:

**Theme Colors:**
- `--cl-primary-color` - Primary text/foreground color
- `--cl-accent-color` - Accent color for highlights
- `--cl-tint-color` - Tint color for secondary elements
- `--cl-primary-background` - Main background color
- `--cl-highlight-background` - Highlight/hover background
- `--cl-shadow-background` - Shadow/dark background

**Spacing:**
- `--cl-xs-gap` (2px), `--cl-s-gap` (4px), `--cl-m-gap` (8px), `--cl-l-gap` (16px), `--cl-xl-gap` (32px)

**Typography:**
- `--cl-core-font` - Primary font
- `--cl-monospace-font` - Monospace font
- `--cl-base-font-size` - Base font size
- `--cl-larger-font-size` - Larger text

**Component Sizes:**
- `--cl-icon-size` (20px)
- `--cl-border-radius` (4px)
- `--cl-z-index-base`, `--cl-z-index-menu`, `--cl-z-index-popup`, `--cl-z-index-modal`

CSS variables automatically adapt to light/dark themes. See [Styling and CSS](https://choplogic.github.io/chop-logic-components/?path=/docs/styling-css--docs) documentation.

## Documentation Standards

For each component create `__docs__` folder with three files:
- `Component.docs.mdx` with MDX documentation (check the template below).
- `Component.stories.tsx` with Storybook stories for this component.
- `Component.example.tsx` with a custom wrapper component that will help to render the target component. If the target component can be rendered as is, without additional wrappers or styles, this file could be omitted and the component could be imported into the stories file directly.

### Storybook Stories
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import Component from './Component.example';

const meta: Meta<typeof Component> = {
  title: 'Category/Component',
  component: Component,
  argTypes: {
    // Define controls for each prop
  },
  args: {
    // Default args
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    // Story-specific args
  },
};
```

### MDX Documentation Template
```mdx
   import { Meta, Controls } from '@storybook/addon-docs/blocks';
   import * as ComponentStories from './Component.stories';

   <Meta of={ComponentStories} title='Category/Component' />

   # ComponentName

   Description of the component and its purpose.

   ## Usage
   // Code example

   ## Best Practices
   - List of accessibility features and considerations
   - List of best practices for using the component

   ## Props

   <Controls />
```

## Testing

We use **Vitest** and **React Testing Library** for testing. Ensure all tests pass before submitting changes:

```sh
npm run test
```

Write tests for new components and features to maintain quality and prevent regressions.

### Component Testing Pattern
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Component from './Component';

describe('Component', () => {
  const defaultProps = {
    // Default props for testing
  };
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('renders correctly', () => {
    render(<Component {...defaultProps} />);
    // Assertions
  });
  
  it('handles user interactions', () => {
    render(<Component {...defaultProps} />);
    fireEvent.click(screen.getByRole('button'));
    // Assert interactions
  });
  
  it('meets accessibility requirements', () => {
    render(<Component {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});
```

### Hook Testing Pattern
```typescript
import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCustomHook } from './useCustomHook';

describe('useCustomHook', () => {
  it('returns initial state', () => {
    const { result } = renderHook(() => useCustomHook());
    expect(result.current.state).toBe(initialState);
  });
  
  it('updates state on action', () => {
    const { result } = renderHook(() => useCustomHook());
    
    act(() => {
      result.current.actions.update();
    });
    
    expect(result.current.state).toBe(updatedState);
  });
});
```

## License

By contributing to Chop Logic, you agree that your contributions will be licensed under the [MIT](LICENSE) license.

---

Thanks for contributing to Chop Logic! Your support helps us create a better, more reusable component library for
everyone.
