import { OrientationMode } from '@enums';
import { ChopLogicTabItem } from '@models';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TabsExample } from './Tabs.example';

const TabContent = ({ title, content }: { title: string; content?: string }) => {
  const defaultContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor accusantium consequatur quia sequi, aspernatur aperiam natus harum error ratione id ullam dicta aliquid, repellendus magni voluptates temporibus iure corporis.';

  return (
    <div style={{ padding: '1rem', border: '2px dashed #ccc', borderRadius: '4px' }}>
      <h3>{title}</h3>
      <p>{content ?? defaultContent}</p>
    </div>
  );
};

const initialTabs: ChopLogicTabItem[] = [
  {
    id: 'tab1',
    title: 'Tab 1',
    content: <TabContent title='Tab 1 Content' />,
  },
  {
    id: 'tab2',
    title: 'Tab 2',
    content: <TabContent title='Tab 2 Content' />,
  },
  {
    id: 'tab3',
    title: 'Tab 3',
    content: <TabContent title='Tab 3 Content' />,
  },
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
    tabs: initialTabs,
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
    onTabAdd: () => console.log('New tab added!'),
    extendedTabLabel: 'New Tab',
    extendedTabContent: <TabContent title='New Tab Content' content='This is the content of the newly added tab.' />,
  },
};
