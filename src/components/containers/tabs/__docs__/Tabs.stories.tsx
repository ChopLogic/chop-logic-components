import type { Meta, StoryObj } from '@storybook/react';

import { ChopLogicTabs } from '@/components';
import { ChopLogicTabsMode } from '@/enums';
import { ChopLogicTabItem } from '@/models';

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
      options: Object.values(ChopLogicTabsMode),
    },
  },
  args: {
    tabs,
    defaultTabId: 'tab1',
    mode: ChopLogicTabsMode.Horizontal,
  },
  component: ChopLogicTabs,
  title: 'Containers/Tabs',
};

export default meta;
type Story = StoryObj<typeof ChopLogicTabs>;

export const Default: Story = {};

export const VerticalTabs: Story = {
  args: {
    mode: ChopLogicTabsMode.Vertical,
  },
};
