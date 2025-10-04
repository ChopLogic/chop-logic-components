import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchExample } from './Search.example';

const meta: Meta<typeof SearchExample> = {
  title: 'Molecules/Search',
  component: SearchExample,
  argTypes: {
    // Basic props
    label: {
      control: 'text',
      description: 'The label text displayed above the search input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Basic',
      },
    },
    name: {
      control: 'text',
      description: 'The name attribute for the search input field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'q' },
        category: 'Basic',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed in the search input when empty',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Type to search...' },
        category: 'Basic',
      },
    },

    // Behavior props
    searchMode: {
      control: 'radio',
      options: ['automatic', 'manual'],
      description:
        'Determines when search is triggered. Automatic: on typing (with debounce). Manual: requires clicking search button or pressing Enter.',
      table: {
        type: { summary: 'automatic | manual' },
        defaultValue: { summary: 'automatic' },
        category: 'Behavior',
      },
    },
    debounceDelay: {
      control: 'number',
      description: 'Delay in milliseconds before triggering automatic search after user stops typing',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '500' },
        category: 'Behavior',
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show a clear button when there is text in the search input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },

    // Input validation props
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed in the search input',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
        category: 'Validation',
      },
    },
    minLength: {
      control: 'number',
      description: 'Minimum number of characters required to trigger search',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
        category: 'Validation',
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the search input is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validation',
      },
    },

    // Browser behavior props
    autoComplete: {
      control: 'select',
      options: [
        'on',
        'off',
        'name',
        'email',
        'username',
        'new-password',
        'current-password',
        'one-time-code',
        'organization-title',
        'street-address',
      ],
      description: 'HTML autocomplete attribute for the search input',
      table: {
        type: { summary: 'HTMLInputAutoCompleteAttribute' },
        defaultValue: { summary: 'off' },
        category: 'Browser',
      },
    },
    spellCheck: {
      control: 'boolean',
      description: 'Whether to enable browser spell checking for the search input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Browser',
      },
    },

    // State props
    disabled: {
      control: 'boolean',
      description: 'Whether the search input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },

    // Event handlers
    onSearch: {
      action: 'searched',
      description: 'Callback fired when search is performed (after debounce delay or manual trigger)',
      table: {
        type: { summary: '(searchTerm: string) => void' },
        category: 'Events',
      },
    },
    onClear: {
      action: 'cleared',
      description: 'Callback fired when the search input is cleared',
      table: {
        type: { summary: '() => void' },
        category: 'Events',
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the search input value changes',
      table: {
        type: { summary: 'ChangeEventHandler<HTMLInputElement>' },
        category: 'Events',
      },
    },
    onFocus: {
      action: 'focused',
      description: 'Callback fired when the search input receives focus',
      table: {
        type: { summary: 'FocusEventHandler<HTMLInputElement>' },
        category: 'Events',
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Callback fired when the search input loses focus',
      table: {
        type: { summary: 'FocusEventHandler<HTMLInputElement>' },
        category: 'Events',
      },
    },

    // HTML attributes
    id: {
      control: 'text',
      description: 'The unique ID for the search input (auto-generated if not provided)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the search wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the search wrapper',
      table: {
        type: { summary: 'CSSProperties' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for the search input',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
    title: {
      control: 'text',
      description: 'Title attribute for the search wrapper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'HTML Attributes',
      },
    },
  },
  args: {
    // Basic props
    label: 'Search',
    name: 'q',
    placeholder: 'Type to search...',

    // Behavior props
    searchMode: 'automatic',
    debounceDelay: 500,
    clearable: true,

    // Validation props
    required: false,

    // Browser behavior props
    autoComplete: 'off',
    spellCheck: false,

    // State props
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof SearchExample>;

export const Default: Story = {
  args: {
    label: 'Search Products',
    placeholder: 'Search by name, category, or description...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default search component in automatic mode with debounce.',
      },
    },
  },
};

export const ManualMode: Story = {
  args: {
    searchMode: 'manual',
    label: 'Manual Search',
    placeholder: 'Type and click search button...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component in manual mode requiring explicit search trigger.',
      },
    },
  },
};

export const CustomDebounce: Story = {
  args: {
    label: 'Fast Search',
    placeholder: 'Search with short delay...',
    debounceDelay: 500,
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component with custom debounce delay for faster responses.',
      },
    },
  },
};

export const WithValidation: Story = {
  args: {
    label: 'Search with Validation',
    placeholder: 'Minimum 3 characters...',
    minLength: 3,
    maxLength: 50,
    required: true,
    searchMode: 'manual',
  },
  parameters: {
    docs: {
      description: {
        story: 'Search component with input validation constraints.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Search',
    placeholder: 'This search is disabled...',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled search component that cannot be interacted with.',
      },
    },
  },
};
