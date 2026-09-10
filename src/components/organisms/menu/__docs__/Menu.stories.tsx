import { IconName, OrientationMode } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { MenuItem } from '@types';

import type Menu from '../Menu';
import MenuExample from './Menu.example';

const ITEMS: MenuItem[] = [
  {
    id: 'item-1',
    label: 'Home',
    icon: IconName.Home,
  },
  {
    id: 'item-2',
    label: 'About',
    icon: IconName.Info,
    nestedItems: [
      {
        id: 'item-5',
        label: 'Overview',
      },
      {
        id: 'item-6',
        label: 'Administrations',
      },
      {
        id: 'item-7',
        label: 'Facts',
        nestedItems: [
          {
            id: 'item-9',
            label: 'History',
          },
          {
            id: 'item-10',
            label: 'Statistics',
            nestedItems: [
              {
                id: 'item-18',
                label: '2023',
                icon: IconName.Check,
                onHover: () => console.log('Hover item-18'),
              },
              {
                id: 'item-19',
                label: '2024',
                icon: IconName.Check,
                onClick: () => console.log('Click item-18'),
              },
              {
                id: 'item-20',
                label: '2025',
                icon: IconName.Check,
                onFocus: () => console.log('Focus item-18'),
                link: 'https://github.com/',
              },
            ],
          },
          {
            id: 'item-11',
            label: 'Awards',
          },
        ],
      },
      {
        id: 'item-8',
        label: 'Campus Tours',
      },
    ],
  },
  {
    id: 'item-3',
    label: 'Admissions',
    icon: IconName.User,
    nestedItems: [
      {
        id: 'item-12',
        label: 'Apply',
      },
      {
        id: 'item-13',
        label: 'Sign Up',
      },
      {
        id: 'item-14',
        label: 'Visit',
      },
    ],
  },
  {
    id: 'item-4',
    label: 'Academics',
    icon: IconName.Book,
    nestedItems: [
      {
        id: 'item-15',
        label: 'Programs',
      },
      {
        id: 'item-16',
        label: 'Courses',
      },
      {
        id: 'item-17',
        label: 'Transcripts',
      },
    ],
  },
];

const DEEPLY_NESTED_ITEMS: MenuItem[] = [
  {
    id: 'file',
    label: 'File',
    icon: IconName.File,
    nestedItems: [
      {
        id: 'file-new',
        label: 'New',
        icon: IconName.FilePlus,
        nestedItems: [
          {
            id: 'file-new-project',
            label: 'Project',
            nestedItems: [
              {
                id: 'file-new-project-react',
                label: 'React',
                nestedItems: [
                  {
                    id: 'file-new-project-react-ts',
                    label: 'TypeScript',
                    icon: IconName.Code,
                  },
                  {
                    id: 'file-new-project-react-js',
                    label: 'JavaScript',
                    icon: IconName.Code,
                  },
                ],
              },
              {
                id: 'file-new-project-vue',
                label: 'Vue',
              },
              {
                id: 'file-new-project-angular',
                label: 'Angular',
              },
            ],
          },
          {
            id: 'file-new-file',
            label: 'File',
          },
          {
            id: 'file-new-folder',
            label: 'Folder',
          },
        ],
      },
      {
        id: 'file-open',
        label: 'Open',
        icon: IconName.FolderPlus,
        nestedItems: [
          {
            id: 'file-open-file',
            label: 'Open File...',
          },
          {
            id: 'file-open-folder',
            label: 'Open Folder...',
          },
          {
            id: 'file-open-recent',
            label: 'Open Recent',
            nestedItems: [
              {
                id: 'file-open-recent-1',
                label: 'project-alpha',
              },
              {
                id: 'file-open-recent-2',
                label: 'project-beta',
              },
              {
                id: 'file-open-recent-more',
                label: 'More...',
                nestedItems: [
                  {
                    id: 'file-open-recent-3',
                    label: 'project-gamma',
                  },
                  {
                    id: 'file-open-recent-4',
                    label: 'project-delta',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'file-save',
        label: 'Save',
        icon: IconName.Save,
      },
      {
        id: 'file-save-as',
        label: 'Save As...',
      },
    ],
  },
  {
    id: 'edit',
    label: 'Edit',
    icon: IconName.Edit,
    nestedItems: [
      {
        id: 'edit-undo',
        label: 'Undo',
        icon: IconName.RotateCcw,
      },
      {
        id: 'edit-redo',
        label: 'Redo',
        icon: IconName.RotateCw,
      },
      {
        id: 'edit-cut',
        label: 'Cut',
        icon: IconName.Scissors,
      },
      {
        id: 'edit-copy',
        label: 'Copy',
        icon: IconName.Copy,
      },
      {
        id: 'edit-paste',
        label: 'Paste',
        icon: IconName.Clipboard,
      },
    ],
  },
  {
    id: 'view',
    label: 'View',
    icon: IconName.Eye,
    nestedItems: [
      {
        id: 'view-appearance',
        label: 'Appearance',
        nestedItems: [
          {
            id: 'view-appearance-theme',
            label: 'Theme',
            nestedItems: [
              {
                id: 'view-appearance-theme-light',
                label: 'Light',
                icon: IconName.Sun,
              },
              {
                id: 'view-appearance-theme-dark',
                label: 'Dark',
                icon: IconName.Moon,
              },
              {
                id: 'view-appearance-theme-system',
                label: 'System',
                icon: IconName.Monitor,
              },
            ],
          },
          {
            id: 'view-appearance-zoom',
            label: 'Zoom',
            nestedItems: [
              {
                id: 'view-appearance-zoom-in',
                label: 'Zoom In',
                icon: IconName.ZoomIn,
              },
              {
                id: 'view-appearance-zoom-out',
                label: 'Zoom Out',
                icon: IconName.ZoomOut,
              },
              {
                id: 'view-appearance-zoom-reset',
                label: 'Reset Zoom',
              },
            ],
          },
        ],
      },
      {
        id: 'view-layout',
        label: 'Layout',
        nestedItems: [
          {
            id: 'view-layout-sidebar',
            label: 'Toggle Sidebar',
            icon: IconName.Sidebar,
          },
          {
            id: 'view-layout-fullscreen',
            label: 'Toggle Full Screen',
            icon: IconName.Maximize,
          },
        ],
      },
    ],
  },
  {
    id: 'help',
    label: 'Help',
    icon: IconName.HelpCircle,
    nestedItems: [
      {
        id: 'help-docs',
        label: 'Documentation',
        icon: IconName.Book,
        link: 'https://github.com/',
      },
      {
        id: 'help-about',
        label: 'About',
        icon: IconName.Info,
      },
    ],
  },
];

const meta: Meta<typeof Menu> = {
  title: 'Organisms/Menu',
  component: MenuExample,
  argTypes: {
    // Content
    items: {
      control: 'object',
      description: 'Array of menu items to display',
      table: {
        defaultValue: { summary: `[]` },
        type: { summary: `MenuItem[]` },
        category: 'Content',
      },
    },
    // Behavior
    mode: {
      control: 'radio',
      options: Object.values(OrientationMode),
      description: 'Orientation of the menu (vertical or horizontal)',
      table: {
        defaultValue: { summary: OrientationMode.Vertical },
        type: { summary: '"vertical" | "horizontal"' },
        category: 'Behavior',
      },
    },
    openedOn: {
      control: 'radio',
      options: ['hover', 'click'],
      description:
        'Interaction method for opening nested menus. Use "hover" for quick access, "click" for complex menus.',
      table: {
        defaultValue: { summary: 'click' },
        type: { summary: '"hover" | "click"' },
        category: 'Behavior',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class for custom menu styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles for the menu container',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the menu component',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    title: {
      control: 'text',
      description: 'Accessibility title for the menu',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    // Accessibility
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
      table: {
        type: { summary: 'number' },
        category: 'Accessibility',
      },
    },
  },
  args: {
    items: ITEMS,
    mode: OrientationMode.Vertical,
    openedOn: 'click',
    id: 'menu',
    className: 'menu-class',
  },
};

export default meta;

type Story = StoryObj<typeof MenuExample>;

export const VerticalMenu: Story = {
  args: {
    mode: OrientationMode.Vertical,
    openedOn: 'click',
  },
};

export const HorizontalMenu: Story = {
  args: {
    mode: OrientationMode.Horizontal,
    openedOn: 'hover',
  },
};

export const DeeplyNestedHorizontalMenu: Story = {
  args: {
    items: DEEPLY_NESTED_ITEMS,
    mode: OrientationMode.Horizontal,
    openedOn: 'hover',
  },
};
