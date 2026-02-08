import { Label } from '@components/atoms';
import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    // Content
    label: {
      control: 'text',
      description: 'The text content of the label',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    icon: {
      control: 'select',
      options: Object.values(IconName),
      description: 'Optional icon element to display with the label',
      table: {
        type: { summary: 'IconName' },
        category: 'Content',
      },
    },
    // Styling
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the icon relative to the text',
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'left' },
        category: 'Styling',
      },
    },
    // Association
    inputId: {
      control: 'text',
      description: 'ID of the associated input element',
      table: {
        type: { summary: 'string' },
        category: 'Association',
      },
    },
    // Validation
    required: {
      control: 'boolean',
      description: 'Whether the associated field is required',
      table: {
        type: { summary: 'boolean' },
        category: 'Validation',
      },
    },
    // Accessibility
    isTextHidden: {
      control: 'boolean',
      description: 'Visually hides the label text (still accessible to screen readers)',
      table: {
        type: { summary: 'boolean' },
        category: 'Accessibility',
      },
    },
  },
  args: {
    label: 'Sample Label',
    required: false,
    inputId: 'sample-input',
    isTextHidden: false,
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    label: 'Username',
    required: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Login into the account',
    icon: IconName.LogIn,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    icon: IconName.EyeOff,
    iconPosition: 'right',
    required: true,
  },
};

export const HiddenText: Story = {
  args: {
    label: 'Delete',
    isTextHidden: true,
    icon: IconName.Trash2,
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with visually hidden text (still accessible to screen readers)',
      },
    },
  },
};
