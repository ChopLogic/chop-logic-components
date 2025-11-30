import { IconName, OrientationMode } from '@enums';
import type { MenuItem } from '@models';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
                icon: IconName.CheckMark,
                onHover: () => console.log('Hover item-18'),
              },
              {
                id: 'item-19',
                label: '2024',
                icon: IconName.CheckMark,
                onClick: () => console.log('Click item-18'),
              },
              {
                id: 'item-20',
                label: '2025',
                icon: IconName.CheckMark,
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
    icon: IconName.Login,
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
    icon: IconName.Graduate,
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

const meta: Meta<typeof Menu> = {
  title: 'Organisms/Menu',
  component: MenuExample,
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of menu items to display',
      table: {
        defaultValue: { summary: `[]` },
        type: { summary: `MenuItem[]` },
      },
    },
    mode: {
      control: 'radio',
      options: Object.values(OrientationMode),
      description: 'Orientation of the menu (vertical or horizontal)',
      table: {
        defaultValue: { summary: OrientationMode.Horizontal },
        type: { summary: '"vertical" or "horizontal"' },
      },
    },
    openedOn: {
      control: 'radio',
      options: ['hover', 'click'],
      description: 'Interaction method for opening nested menus',
      table: {
        defaultValue: { summary: 'click' },
        type: { summary: '"hover" or "click"' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom menu styling',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the menu component',
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles for the menu container',
    },
    title: {
      control: 'text',
      description: 'Accessibility title for the menu',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
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
