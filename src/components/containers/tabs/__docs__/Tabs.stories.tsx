import type { Meta, StoryObj } from '@storybook/react';

import { ChopLogicTabs } from '@/components';
import { ChopLogicTabItem } from '@/types';

const tabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'Tab 1', content: <div>Content for Tab 1</div> },
  { id: 'tab2', title: 'Tab 2', content: <div>Content for Tab 2</div> },
  { id: 'tab3', title: 'Tab 3', content: <div>Content for Tab 3</div> },
];

const meta: Meta<typeof ChopLogicTabs> = {
  argTypes: {
    tabs: { control: 'object' },
    defaultTabId: { control: 'text' },
    mode: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
  args: {
    tabs,
    defaultTabId: 'tab1',
    theme: 'light',
  },
  component: ChopLogicTabs,
  title: 'Containers/Tabs',
};

export default meta;
type Story = StoryObj<typeof ChopLogicTabs>;

export const Default: Story = {};

export const VerticalTabs: Story = {
  args: {
    mode: 'vertical',
  },
};
