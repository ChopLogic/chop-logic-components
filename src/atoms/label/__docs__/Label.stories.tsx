import { Label } from '@atoms';
import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    label: {
      control: 'text',
      description: 'The text content of the label',
    },
    required: {
      control: 'boolean',
      description: 'Whether the associated field is required',
    },
    inputId: {
      control: 'text',
      description: 'ID of the associated input element',
    },
    isTextHidden: {
      control: 'boolean',
      description: 'Visually hides the label text (still accessible to screen readers)',
    },
    icon: {
      description: 'Optional icon element to display with the label',
      control: 'select',
      options: Object.values(IconName),
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: 'Position of the icon relative to the text',
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
    icon: IconName.Login,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    icon: IconName.Hide,
    iconPosition: 'right',
    required: true,
  },
};

export const HiddenText: Story = {
  args: {
    label: 'Delete',
    isTextHidden: true,
    icon: IconName.Delete,
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
