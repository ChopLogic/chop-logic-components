import { ChopLogicIcon, ChopLogicLabel } from '@atoms';
import { IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ChopLogicLabel> = {
  title: 'Atoms/Label',
  component: ChopLogicLabel,
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

type Story = StoryObj<typeof ChopLogicLabel>;

export const Primary: Story = {
  args: {
    label: 'Username',
    required: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Login into the account',
    icon: <ChopLogicIcon name={IconName.Login} />,
    iconPosition: 'left',
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    icon: <ChopLogicIcon name={IconName.Hide} />,
    iconPosition: 'right',
    required: true,
  },
};

export const HiddenText: Story = {
  args: {
    label: 'Delete',
    isTextHidden: true,
    icon: <ChopLogicIcon name={IconName.Delete} />,
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
