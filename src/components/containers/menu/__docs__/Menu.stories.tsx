import type { Meta, StoryObj } from '@storybook/react';

import { ChopLogicOrientationMode } from '@/enums';
import { ChopLogicMenuItem } from '@/models';

import MenuExample from './Menu.example.tsx';

const ITEMS: ChopLogicMenuItem[] = [
  {
    id: 'item-1',
    parentId: null,
    level: 0,
    label: 'Home',
  },
  {
    id: 'item-2',
    parentId: null,
    level: 0,
    label: 'About',
  },
  {
    id: 'item-3',
    parentId: null,
    level: 0,
    label: 'Admissions',
  },
  {
    id: 'item-4',
    parentId: null,
    level: 0,
    label: 'Academics',
  },
  {
    id: 'item-5',
    parentId: 'item-2',
    level: 1,
    label: 'Overview',
  },
  {
    id: 'item-6',
    parentId: 'item-2',
    level: 1,
    label: 'Administrations',
  },
  {
    id: 'item-7',
    parentId: 'item-2',
    level: 1,
    label: 'Facts',
  },
  {
    id: 'item-8',
    parentId: 'item-2',
    level: 1,
    label: 'Campus Tours',
  },
  {
    id: 'item-9',
    parentId: 'item-7',
    level: 2,
    label: 'History',
  },
  {
    id: 'item-10',
    parentId: 'item-7',
    level: 2,
    label: 'Statistics',
  },
  {
    id: 'item-11',
    parentId: 'item-7',
    level: 2,
    label: 'Awards',
  },
];

const meta: Meta<typeof MenuExample> = {
  title: 'Containers/Menu',
  component: MenuExample,
  args: {
    items: ITEMS,
    mode: ChopLogicOrientationMode.Horizontal,
  },
};

export default meta;

type Story = StoryObj<typeof MenuExample>;

export const Default: Story = {};
