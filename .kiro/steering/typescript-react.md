---
inclusion: fileMatch
fileMatchPattern: "src/**/*.{ts,tsx}"
---

# TypeScript & React Component Guidelines

## Component Structure

```tsx
import './Component.css';
import { getClassName } from '@utils';
import type { FC } from 'react';

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

## Key Patterns

- Extend shared props via `ChopLogicComponentProps` (from `src/types/_common.ts`)
- Destructure props with sensible defaults
- Spread `...rest` onto the root element
- Import `./Component.css` for scoped styles
- Use `getClassName` for conditional BEM class names
- Shared types live in `src/types/` — not inline per component

## Hooks Pattern

```tsx
export const useCustomHook = (params: HookParams): HookReturn => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Side effects
    return () => {
      // Cleanup
    };
  }, [dependencies]);

  return { state, actions };
};
```

## Accessibility Requirements

- Use semantic HTML elements (`nav`, `button`, `dialog`, `ol`, etc.)
- Include proper ARIA roles, labels, and descriptions
- Support keyboard navigation: Enter and Space for interactive elements
- Manage focus for dialogs, menus, dropdowns
- Set `tabIndex={disabled ? -1 : 0}` on interactive custom elements
- Handle loading and error states with appropriate announcements

```tsx
// Keyboard handler pattern
const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    // Handle interaction
  }
};
```

## Import Aliases

The project uses path aliases:
- `@utils` → `src/utils`
- `@hooks` → `src/hooks`
- `@enums` → `src/enums`
- `@types` → `src/types`
- `@assets` → `src/assets`

## Do's and Don'ts

- **Do** use React 19 features and patterns
- **Do** prefer functional components and hooks
- **Do** keep components reusable and composable
- **Don't** violate Biome.js rules
- **Don't** use class components
- **Don't** use inline styles — use CSS with BEM
- **Don't** hard-code colors or spacing — use CSS variables
