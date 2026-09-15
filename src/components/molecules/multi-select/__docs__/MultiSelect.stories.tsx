import type { Meta, StoryObj } from '@storybook/react-vite';
import type { SelectValue } from '@types';

import { MultiSelectExample } from './MultiSelect.example';

const MULTI_SELECT_LANGUAGES: SelectValue[] = [
  { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English' },
  { id: '583e8b60-0177-4e38-a423-4b1d5d0a2236', label: 'Spanish' },
  { id: 'b20bea7b-8172-4d12-b172-d5feac02d863', label: 'French' },
  { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German' },
  { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', label: 'Italian' },
  { id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901', label: 'Portuguese' },
];

const meta: Meta<typeof MultiSelectExample> = {
  component: MultiSelectExample,
  title: 'Molecules/MultiSelect',
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'Label text displayed above the multi-select. Required for accessibility.',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when no options are selected',
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
      description: 'Initial selected value ID(s). Used with form context.',
      table: {
        type: { summary: 'string | number | readonly string[]' },
        category: 'Content',
      },
    },
    // State
    disabled: {
      control: 'boolean',
      description: 'Disables the multi-select, preventing user interaction',
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
      description:
        'Callback fired when selection changes. Receives array of all currently selected options.',
      table: {
        type: { summary: '(values?: SelectValue[]) => void' },
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
      description: 'Inline styles for the multi-select wrapper',
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
      description: 'Title attribute for the multi-select wrapper',
      table: {
        type: { summary: 'string' },
        category: 'HTML Attributes',
      },
    },
  },
  args: {
    label: 'Select languages',
    options: MULTI_SELECT_LANGUAGES,
    name: 'languages',
    placeholder: 'Select languages',
    required: false,
    disabled: false,
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelectExample>;

export const Default: Story = {
  args: {
    id: 'default-multiselect',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default multi-select component with standard configuration.',
      },
    },
  },
};

export const Required: Story = {
  args: {
    id: 'required-multiselect',
    required: true,
    label: 'Preferred languages',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Required multi-select field. Shows a visual indicator and sets `aria-required="true"` for accessibility.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-multiselect',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled multi-select that cannot be interacted with. Useful for read-only scenarios.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    id: 'loading-multiselect',
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
    id: 'many-options-multiselect',
    label: 'Select skills',
    name: 'skills',
    placeholder: 'Choose your skills',
    options: [
      { id: 'js', label: 'JavaScript' },
      { id: 'ts', label: 'TypeScript' },
      { id: 'react', label: 'React' },
      { id: 'vue', label: 'Vue' },
      { id: 'angular', label: 'Angular' },
      { id: 'node', label: 'Node.js' },
      { id: 'python', label: 'Python' },
      { id: 'java', label: 'Java' },
      { id: 'csharp', label: 'C#' },
      { id: 'go', label: 'Go' },
      { id: 'rust', label: 'Rust' },
      { id: 'sql', label: 'SQL' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Multi-select with many options. Use keyboard navigation (Arrow keys, Home, End) to efficiently navigate long lists.',
      },
    },
  },
};
