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
    tabs: {
      control: 'object',
      description: 'Array of tab items to display',
      table: {
        type: { summary: 'ChopLogicTabItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    defaultTabId: {
      control: 'text',
      description: 'Initially selected tab ID',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'first tab ID' },
      },
    },
    mode: {
      control: 'radio',
      options: Object.values(OrientationMode),
      description: 'Orientation of the tabs',
      table: {
        type: { summary: 'OrientationMode' },
        defaultValue: { summary: 'OrientationMode.Horizontal' },
      },
    },
    stretched: {
      control: 'boolean',
      description: 'Whether tabs should stretch to fill available space',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    editable: {
      control: 'boolean',
      description: 'Whether tab titles can be edited',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    extendable: {
      control: 'boolean',
      description: 'Whether new tabs can be added',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    extendedTabLabel: {
      control: 'text',
      description: 'Default label for newly added tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"New Tab"' },
      },
    },
    extendedTabContent: {
      control: 'object',
      description: 'Content template for newly added tabs',
      table: {
        type: { summary: 'ReactElement' },
        defaultValue: { summary: '<div></div>' },
      },
    },
    onTabTitleChange: {
      action: 'onTabTitleChange',
      description: 'Callback when a tab title is changed',
      table: {
        type: { summary: '(tabId: string, newTitle: string) => void' },
        category: 'Callbacks',
      },
    },
    onTabAdd: {
      action: 'onTabAdd',
      description: 'Callback when a new tab is added',
      table: {
        type: { summary: '() => void' },
        category: 'Callbacks',
      },
    },
    onTabSelect: {
      action: 'onTabSelect',
      description: 'Callback when a tab is selected',
      table: {
        type: { summary: '(id: string) => void' },
        category: 'Callbacks',
      },
    },
    onTabDelete: {
      action: 'onTabDelete',
      description: 'Callback when a tab is deleted',
      table: {
        type: { summary: '(id: string) => void' },
        category: 'Callbacks',
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the root element',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'HTML style attribute for the root element',
      table: {
        type: { summary: 'React.CSSProperties' },
        category: 'Styling',
      },
    },
    id: {
      control: 'text',
      description: 'HTML id attribute for the root element',
      table: {
        type: { summary: 'string' },
        category: 'DOM Attributes',
      },
    },
    title: {
      control: 'text',
      description: 'HTML title attribute for the root element',
      table: {
        type: { summary: 'string' },
        category: 'DOM Attributes',
      },
    },
    tabIndex: {
      control: 'number',
      description: 'HTML tab-index attribute for the root element',
      table: {
        type: { summary: 'number' },
        category: 'DOM Attributes',
      },
    },
  },
  args: {
    tabs: initialTabs,
    defaultTabId: 'tab1',
    mode: OrientationMode.Horizontal,
    stretched: false,
    editable: false,
    extendable: false,
    extendedTabLabel: 'New Tab',
  },
  component: TabsExample,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible and accessible tabs component supporting horizontal and vertical orientations, editable titles, and dynamic tab management.',
      },
    },
  },
  title: 'Organisms/Tabs',
};

export default meta;
type Story = StoryObj<typeof TabsExample>;

export const Horizontal: Story = {
  args: {
    mode: OrientationMode.Horizontal,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default horizontal tabs with standard navigation.',
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    mode: OrientationMode.Vertical,
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical tabs for sidebar navigation or compact layouts.',
      },
    },
  },
};

export const Stretched: Story = {
  args: {
    mode: OrientationMode.Horizontal,
    stretched: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs that stretch to fill the available horizontal space.',
      },
    },
  },
};

export const Editable: Story = {
  args: {
    editable: true,
    stretched: true,
    onTabTitleChange: (tabId: string, newTitle: string) => console.log(`Tab ID: ${tabId}, New Title: ${newTitle}`),
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with editable titles. Click the edit icon on the selected tab to modify its title.',
      },
    },
  },
};

export const Extendable: Story = {
  args: {
    editable: true,
    stretched: true,
    extendable: true,
    onTabTitleChange: (tabId: string, newTitle: string) => console.log(`Tab ID: ${tabId}, New Title: ${newTitle}`),
    onTabAdd: () => console.log('New tab added!'),
    onTabDelete: (id: string) => console.log(`Tab deleted: ${id}`),
    extendedTabLabel: 'New Tab',
    extendedTabContent: <TabContent title='New Tab Content' content='This is the content of the newly added tab.' />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fully dynamic tabs with add/delete functionality and editable titles. Add new tabs using the "+" button and delete tabs using the delete icon.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    tabs: [
      {
        id: 'active-tab',
        title: 'Active Tab',
        content: <TabContent title='Active Tab Content' />,
      },
      {
        id: 'disabled-tab',
        title: 'Disabled Tab',
        disabled: true,
        content: <TabContent title='Disabled Tab Content' />,
      },
      {
        id: 'another-active',
        title: 'Another Active',
        content: <TabContent title='Another Active Tab Content' />,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with disabled state. Disabled tabs cannot be selected or edited.',
      },
    },
  },
};
