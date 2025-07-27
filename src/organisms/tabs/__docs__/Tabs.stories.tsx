import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicTabItem } from '@models';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TabsExample } from './Tabs.example';

const tabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'Tab 1', content: <div>Content for Tab 1</div> },
  { id: 'tab2', title: 'Tab 2', content: <div>Content for Tab 2</div> },
  { id: 'tab3', title: 'Tab 3', content: <div>Content for Tab 3</div> },
];

const meta: Meta<typeof TabsExample> = {
  argTypes: {
    tabs: { control: 'object' },
    defaultTabId: { control: 'text' },
    mode: {
      control: 'radio',
      options: Object.values(ChopLogicOrientationMode),
    },
  },
  args: {
    tabs,
    defaultTabId: 'tab1',
  },
  component: TabsExample,
  title: 'Organisms/Tabs',
};

export default meta;
type Story = StoryObj<typeof TabsExample>;

export const HorizontalTabs: Story = {
  args: {
    mode: ChopLogicOrientationMode.Horizontal,
  },
};

export const VerticalTabs: Story = {
  args: {
    mode: ChopLogicOrientationMode.Vertical,
  },
};
