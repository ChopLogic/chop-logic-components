---
inclusion: fileMatch
fileMatchPattern: "**/__docs__/**/*.{tsx,mdx}"
---

# Storybook Documentation Guidelines

## File Structure

Each component should have a `__docs__` folder with:

| File | Purpose |
|------|---------|
| `Component.stories.tsx` | Stories with `Meta` and `StoryObj` |
| `Component.docs.mdx` | MDX documentation page |
| `Component.example.tsx` | Optional wrapper for rendering in stories (omit if component renders directly) |

## Stories Template

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import Component from './Component.example'; // or direct import

const meta = {
  title: 'Category/Component',
  component: Component,
  argTypes: {
    // Define controls for each prop
  },
  args: {
    // Default arg values
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    // Story-specific args
  },
};
```

## MDX Documentation Template

```mdx
import { Meta, Controls } from '@storybook/addon-docs/blocks';
import * as ComponentStories from './Component.stories';

<Meta of={ComponentStories} title='Category/Component' />

# ComponentName

Description of the component and its purpose.

## Usage

\`\`\`tsx
import { Component } from 'chop-logic-components';

<Component prop="value" />
\`\`\`

## Best Practices

- Accessibility considerations
- Usage patterns and recommendations

## Props

<Controls />
```

## Categories

Use the appropriate Storybook title category:

- `Atoms/ComponentName` — for atoms
- `Molecules/ComponentName` — for molecules
- `Organisms/ComponentName` — for organisms
- `Hooks/useHookName` — for hooks
- `HOCs/withHocName` — for higher-order components

## Guidelines

- New features should be visible and documented in Storybook
- Provide meaningful argTypes with descriptions
- Include multiple stories for different states (default, disabled, loading, error)
- Use the example wrapper only when additional context or layout is needed
