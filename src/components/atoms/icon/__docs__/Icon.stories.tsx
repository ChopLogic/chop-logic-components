import { ElementSize, IconName } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import Icon from '../Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: IconName.Home,
    title: 'Home icon',
    id: 'icon-id',
    className: 'icon-class',
    testId: 'icon-test-id',
    size: ElementSize.ExtraLarge,
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(IconName),
      description: 'The icon name to display',
      table: {
        type: { summary: 'IconName' },
        category: 'Content',
      },
    },
    size: {
      control: 'select',
      options: Object.values(ElementSize),
      description: 'The size of the icon',
      table: {
        type: { summary: 'ElementSize' },
        category: 'Styling',
      },
    },
    title: {
      control: 'text',
      description: 'Tooltip text shown on hover',
      table: {
        type: { summary: 'string' },
        category: 'Interaction',
      },
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the icon element',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles to apply to the icon',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    testId: {
      control: 'text',
      description: 'Test ID used for automated testing',
      table: {
        type: { summary: 'string' },
        category: 'Testing',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
    hidden: {
      control: 'boolean',
      description: 'Whether the icon is hidden from assistive technologies',
      table: {
        type: { summary: 'string' },
        category: 'Accessibility',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
