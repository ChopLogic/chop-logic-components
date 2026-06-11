---
inclusion: fileMatch
fileMatchPattern: "**/__tests__/**,**/*.test.{ts,tsx}"
---

# Testing Guidelines

## Stack

- **Vitest** — test runner
- **React Testing Library** — component rendering and interaction
- **jsdom** — DOM environment

## Conventions

- Colocate tests in `__tests__/Component.test.tsx` next to the component
- Use `vi` from Vitest for mocks; call `vi.clearAllMocks()` in `beforeEach`
- Mock external dependencies; never rely on network calls
- Run `npm run test:ci` before submitting PRs

## Coverage Thresholds

- **Functions:** minimum 95%
- **Lines:** max 30 uncovered lines
- Statements and branches do not have numeric thresholds

## Component Test Template

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import Component from '../Component';

describe('Component', () => {
  const defaultProps = {
    // Provide required props
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<Component {...defaultProps} />);
    // Assert presence of key elements
  });

  it('handles user interactions', () => {
    render(<Component {...defaultProps} />);
    fireEvent.click(screen.getByRole('button'));
    // Assert expected behavior
  });

  it('meets accessibility requirements', () => {
    render(<Component {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});
```

## Hook Test Template

```tsx
import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCustomHook } from '../useCustomHook';

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

## Best Practices

- Test behavior, not implementation details
- Query by accessible roles (`getByRole`, `getByLabelText`) over test IDs
- Test keyboard interactions (Enter, Space) for interactive components
- Test disabled states — verify interactions are blocked
- Test loading/error states when applicable
- Keep tests focused: one behavior per test case
