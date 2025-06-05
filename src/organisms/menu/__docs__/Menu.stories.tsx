import { ChopLogicIconName, ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuItem } from '@models';
import type { Meta, StoryObj } from '@storybook/react-vite';

import MenuExample from './Menu.example';

const ITEMS: ChopLogicMenuItem[] = [
  {
    id: 'item-1',
    label: 'Home',
    icon: ChopLogicIconName.Home,
  },
  {
    id: 'item-2',
    label: 'About',
    icon: ChopLogicIconName.Info,
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
                icon: ChopLogicIconName.CheckMark,
                onHover: () => console.log('Hover item-18'),
              },
              {
                id: 'item-19',
                label: '2024',
                icon: ChopLogicIconName.CheckMark,
                onClick: () => console.log('Click item-18'),
              },
              {
                id: 'item-20',
                label: '2025',
                icon: ChopLogicIconName.CheckMark,
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
    icon: ChopLogicIconName.Login,
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
    icon: ChopLogicIconName.Graduate,
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

const meta: Meta<typeof MenuExample> = {
  title: 'Organisms/Menu',
  component: MenuExample,
  argTypes: {
    mode: {
      control: 'radio',
      options: Object.values(ChopLogicOrientationMode),
    },
  },
  args: {
    items: ITEMS,
  },
};

export default meta;

type Story = StoryObj<typeof MenuExample>;

export const VerticalMenu: Story = {
  args: {
    mode: ChopLogicOrientationMode.Vertical,
  },
};

export const HorizontalMenu: Story = {
  args: {
    mode: ChopLogicOrientationMode.Horizontal,
  },
};
