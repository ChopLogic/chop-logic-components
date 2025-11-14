# AI Coding Agent Instructions for Chop Logic Components

Welcome to the Chop Logic Components repository! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's conventions.

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
- **Run tests**: `npm test` (watch mode) or `npm run test:ci` (CI mode).
- **Check code quality**: `npm run lint` (all linters) or `npm run typecheck` (type checking).
- **Generate coverage report**: `npm run coverage`

### Formatting and Linting
- **Format code**: `npm run format` (Biome + Prettier).
- **Fix lint issues**: `npm run lint:fix`

### Releasing
- **Bump version**: `npm run release:version [patch|minor|major]`

## Project-Specific Conventions
1. **Atomic Design**: Follow the `atoms`, `molecules`, `organisms` hierarchy for component organization.
2. **TypeScript**: All components and utilities are strongly typed. Use `src/models/` for shared type definitions.
3. **Styling**: Use SCSS modules in `src/styles/`. Variables and mixins are defined in `src/styles/variables/` and `src/styles/mixins/`.
4. **Testing**: Write unit tests using Vitest. Place test files alongside the components they test.
5. **Icons**: Use `src/assets/icons/` for SVG assets. Reference them in `src/enums/icon-name.ts`.

## Integration Points
- **Storybook**: Provides a live playground for components. Access it locally via `npm start` or online at [Storybook Playground](https://choplogic.github.io/chop-logic-components).
- **NPM Package**: The library is published as `chop-logic-components` on NPM.
- **CI/CD**: GitHub Actions handle builds, tests, and deployments.

## Development Standards
### File Naming Conventions
- Components: `PascalCase.tsx` (e.g., `Search.tsx`)
- Hooks: `camelCase.ts` (e.g., `useDebounce.ts`)
- Utilities: `camelCase.ts` (e.g., `getClassName.ts`)
- Stories: `Component.stories.tsx`
- Tests: `Component.test.tsx`
- Styles: `Component.module.scss`

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

## Documentation Standards
### Storybook Stories
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import Component from './Component';

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

### MDX Documentation
```mdx
import { Meta, Controls } from '@storybook/addon-docs/blocks';
import * as ComponentStories from './Component.stories';
import { Props } from '@storybook/blocks';
import Component from './Component';

<Meta of={ComponentStories} title='Category/Component' />

# ComponentName

Description of the component and its purpose.

## Usage

```tsx
// Code example
```

### Accessibility Notes
- List of accessibility features and considerations

### Best Practices
- List of best practices for using the component

## Props

<Controls />
```

## Common Patterns
### Event Handler Pattern
```typescript
const handleEvent = useCallback((value: Type) => {
  if (!disabled) {
    onChange?.(value);
  }
}, [disabled, onChange]);
```

### Conditional Rendering
```typescript
return condition ? (
  <PrimaryComponent {...props} />
) : (
  <FallbackComponent {...props} />
);
```

## Anti-Patterns to Avoid
```typescript
// ❌ Don't use inline styles for layout
<div style={{ margin: '10px' }}>

// ❌ Don't forget accessibility
<div onClick={handleClick}>

// ❌ Don't use any type
const value: any = getValue();

// ❌ Don't create components without TypeScript interfaces
const Component = (props) => { ... }
```

## Specific Guidelines
### Libraries and Tools
- Use React 19+ features and best practices
- Mock external dependencies in tests
- Use SCSS mixins for reusable styles
- Avoid writing code that violates Biome.js rules

### Form Components
- Always include proper labels
- Support disabled states
- Provide validation feedback
- Work with native form submission

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