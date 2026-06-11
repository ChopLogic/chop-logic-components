---
inclusion: fileMatch
fileMatchPattern: "**/*.css"
---

# CSS & BEM Styling Guidelines

## BEM Naming Convention

Pattern: `.cl-block-name__element-name_modifier-name_modifier-value`

**Rules:**
- All names in lowercase Latin letters
- Words separated by hyphens (`-`)
- Block → element separator: double underscore (`__`)
- Modifier separator: single underscore (`_`)
- Boolean modifiers omit the value

## Example

```css
/* Block */
.cl-widget { }

/* Element */
.cl-widget__label { }
.cl-widget__icon { }

/* Modifier (key-value) */
.cl-widget_size_large { }

/* Modifier (boolean) */
.cl-widget_disabled { }
```

## Implementation Rules

1. **One CSS file per component:** `Component.css`
2. **No hard-coded values** when a CSS variable exists
3. **Use `var(--cl-*)`** tokens from `src/styles/main.css`
4. **Theme support:** Variables switch automatically for dark mode (`.cl-components-dark-theme`)

## Design Tokens Reference

**Colors:**
- `--cl-base-font-color` — text color
- `--cl-base-background-color` — background
- `--cl-accent-a0` — primary accent
- `--cl-accent-a10` — accent variant for interactive states
- `--cl-surface-a10` — surface for component backgrounds
- `--cl-surface-tonal-a0` — tonal surface for highlights
- `--cl-success-a0`, `--cl-warning-a0`, `--cl-danger-a0`, `--cl-info-a0` — semantic colors

**Spacing:**
- `--cl-xs-gap` (2px), `--cl-s-gap` (4px), `--cl-m-gap` (8px), `--cl-l-gap` (16px), `--cl-xl-gap` (32px)

**Typography:**
- `--cl-core-font` — primary font
- `--cl-monospace-font` — monospace font
- `--cl-typography-base-mobile`, `--cl-typography-base-desktop` — base font sizes

**Component:**
- `--cl-icon-size` (20px)
- `--cl-border-radius` (4px)
- `--cl-z-index-base`, `--cl-z-index-menu`, `--cl-z-index-popup`, `--cl-z-index-modal`

## Component CSS Template

```css
.cl-component {
  color: var(--cl-base-font-color);
  background-color: var(--cl-base-background-color);
  padding: var(--cl-m-gap);
  border-radius: var(--cl-border-radius);
  font-family: var(--cl-core-font);
  font-size: var(--cl-typography-base-mobile);
}

.cl-component__inner {
  display: flex;
  gap: var(--cl-s-gap);
}

.cl-component_disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cl-component:hover:not(.cl-component_disabled) {
  background-color: var(--cl-surface-tonal-a0);
}

.cl-component:focus {
  outline: 2px solid var(--cl-accent-a0);
  outline-offset: 2px;
}
```

## In TSX — Use `getClassName`

```tsx
import { getClassName } from '@utils';

const rootClass = getClassName([
  'cl-component',
  className,
  {
    'cl-component_disabled': disabled,
    'cl-component_size_large': size === 'large',
  },
]);
```

Never use string concatenation for conditional classes.
