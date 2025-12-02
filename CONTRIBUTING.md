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

- Follow the project's existing coding style (Prettier for SCSS and MD(X) files and Biome.js for everything else).
- Write clear and concise documentation.
- Prefer functional components and hooks.
- Use TypeScript for type safety.
- Keep components reusable and accessible.
- For AI assisted coding use `copilot-instructions.md` in `.github` folder.

### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `Search.tsx`)
- Hooks: `camelCase.ts` (e.g., `useDebounce.ts`)
- Utilities: `camelCase.ts` (e.g., `getClassName.ts`)
- Styles: `Component.module.scss`
- Tests: `__tests__/Component.test.tsx`
- Stories: `__docs__/Component.stories.tsx`
- Documentation: `__docs__/Component.docs.mdx`
- Component example: `__docs__/Component.example.tsx`

### Base Component Structure
```typescript
import { getClassName } from '@utils';
import { FC } from 'react';
import styles from './Component.module.scss';

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
    styles.component,
    className,
    {
      [styles.component__modifier]: condition,
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
```scss
@use "/src/styles/breakpoints";
@use "/src/styles/typography";
@use "/src/styles/mixins";

// SCSS Module Structure
.component {
  // Base styles
  color: var(--cl-primary-color);
  
  &__modifier {
    // Modifier styles
    @include mixins.disabled();
  }
  
  &--state {
    // State styles
  }
  
  // Child elements
  &_child {
    // Child styles
    @include typography.core-font(base);
  }

  // Responsive design
  @include breakpoints.md-up {
    // Tablet styles
  }
}
```

### getClassName Utility
```typescript
// Always use for conditional classes
const className = getClassName([
  styles.base,
  className, // User-provided classes
  {
    [styles.active]: isActive,
    [styles.disabled]: isDisabled,
  },
]);
```

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
