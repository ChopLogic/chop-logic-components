import type { Meta, StoryObj } from '@storybook/react-vite';
import type { SelectValue } from '@types';

import { SelectExample } from './Select.example';

const SELECT_LANGUAGES: SelectValue[] = [
  { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English' },
  { id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7', label: 'Russian' },
  { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German' },
  { id: 'a1c2d3e4-f5g6-7h8i-9j0k-l1m2n3o4p5q6', label: 'French' },
  { id: 'b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7', label: 'Spanish' },
];

const meta: Meta<typeof SelectExample> = {
  component: SelectExample,
  title: 'Molecules/Select',
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Label text displayed above the select. Required for accessibility.',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no option is selected',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Not selected"' },
        category: 'Content',
      },
    },
    options: {
      control: 'object',
      description: 'Array of available options. Each option must have `id` and `label` properties.',
      table: {
        type: { summary: 'SelectValue[]' },
        category: 'Content',
      },
    },
    defaultValue: {
      control: 'text',
      description:
        'Initial selected value ID. Can be a string matching an option ID, or used with form context.',
      table: {
        type: { summary: 'string | number | readonly string[]' },
        category: 'Content',
      },
    },
    // State
    disabled: {
      control: 'boolean',
      description: 'Disables the select, preventing user interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    isLoading: {
      control: 'boolean',
      description:
        'Shows loading state with shimmer animation. Disables interaction while loading.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    // Validation
    required: {
      control: 'boolean',
      description: 'Marks the field as required. Adds visual indicator and sets aria-required.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validation',
      },
    },
    // Interaction
    onChange: {
      action: 'changed',
      description: 'Callback fired when the selected value changes. Receives the selected option.',
      table: {
        type: { summary: '(value?: SelectValue) => void' },
        category: 'Interaction',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the select wrapper',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier. Auto-generated if not provided.',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for form submission. Required prop.',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    // HTML Attributes
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'HTML Attributes',
      },
    },
    title: {
      control: 'text',
      description: 'Title attribute for the select wrapper',
      table: {
        type: { summary: 'string' },
        category: 'HTML Attributes',
      },
    },
  },
  args: {
    label: 'Select your language',
    options: SELECT_LANGUAGES,
    name: 'language',
    placeholder: 'Select a language',
    required: false,
    disabled: false,
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof SelectExample>;

export const Default: Story = {
  args: {
    id: 'default-select',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default select component with standard configuration.',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    id: 'preselected-select',
    defaultValue: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7',
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with a pre-selected value. The `defaultValue` should match an option ID.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: 'required-select',
    required: true,
    label: 'Preferred language',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Required select field. Shows a visual indicator and sets `aria-required="true"` for accessibility.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-select',
    disabled: true,
    defaultValue: '57b5a856-bc4b-4c2f-8295-9f44434fafc7',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled select that cannot be interacted with. Useful for read-only scenarios.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    id: 'loading-select',
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Loading state with shimmer animation. The dropdown cannot be opened while loading. Use this when fetching options asynchronously.',
      },
    },
  },
};

export const ManyOptions: Story = {
  args: {
    id: 'many-options-select',
    label: 'Select a country',
    name: 'country',
    placeholder: 'Choose your country',
    options: [
      { id: 'us', label: 'United States' },
      { id: 'ca', label: 'Canada' },
      { id: 'mx', label: 'Mexico' },
      { id: 'uk', label: 'United Kingdom' },
      { id: 'de', label: 'Germany' },
      { id: 'fr', label: 'France' },
      { id: 'es', label: 'Spain' },
      { id: 'it', label: 'Italy' },
      { id: 'jp', label: 'Japan' },
      { id: 'cn', label: 'China' },
      { id: 'au', label: 'Australia' },
      { id: 'br', label: 'Brazil' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Select with many options. Use keyboard navigation (Arrow keys, Home, End) to efficiently navigate long lists.',
      },
    },
  },
};
