import { OrientationMode } from '@enums';
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
      options: Object.values(OrientationMode),
    },
  },
  args: {
    tabs,
    defaultTabId: 'tab1',
    stretched: false,
  },
  component: TabsExample,
  title: 'Organisms/Tabs',
};

export default meta;
type Story = StoryObj<typeof TabsExample>;

export const Horizontal: Story = {
  args: {
    mode: OrientationMode.Horizontal,
  },
};

export const Vertical: Story = {
  args: {
    mode: OrientationMode.Vertical,
  },
};

export const Stretched: Story = {
  args: {
    mode: OrientationMode.Horizontal,
    stretched: true,
  },
};

export const Editable: Story = {
  args: {
    editable: true,
    stretched: true,
    onTabTitleChange: (tabId: string, newTitle: string) => console.log(`Tab ID: ${tabId}, New Title: ${newTitle}`),
  },
};

export const Extendable: Story = {
  args: {
    editable: true,
    stretched: true,
    extendable: true,
    onTabTitleChange: (tabId: string, newTitle: string) => console.log(`Tab ID: ${tabId}, New Title: ${newTitle}`),
  },
};
