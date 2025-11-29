import type { Meta, StoryObj } from '@storybook/react-vite';

import type Grid from '../Grid';
import { GridExample } from './Grid.example';

const meta: Meta<typeof Grid> = {
  component: GridExample,
  title: 'Organisms/Grid',
  argTypes: {
    columns: {
      control: 'object',
      description: 'Array of column definitions for the grid',
    },
    data: {
      control: 'object',
      description: 'Array of data items to display in the grid',
    },
    caption: {
      control: 'text',
      description: 'Optional caption/title for the grid',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether rows can be selected',
    },
    renderDataItem: {
      control: 'object',
      description: 'Custom render function for grid cells',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback function when rows are selected',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
    },
    id: {
      control: 'text',
      description: 'Unique identifier for the grid',
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles for the grid',
    },
    title: {
      control: 'text',
      description: 'Accessibility title for the grid',
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for keyboard navigation',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const DefaultGrid: Story = {
  args: {
    selectable: false,
    renderDataItem: (item, field) => {
      return field === 'phone' ? (
        <em>{item[field ?? ''] as string}</em>
      ) : (
        <span>{item[field] as string}</span>
      );
    },
    caption: 'Contact List',
    columns: [
      { title: 'Company', field: 'company' },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: [
      {
        id: 'row1',
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany',
        phone: '123-345-7890',
      },
      {
        id: 'row2',
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico',
        phone: '123-345-7890',
      },
      {
        id: 'row3',
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria',
        phone: '123-345-7890',
      },
      {
        id: 'row4',
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK',
        phone: '123-345-7890',
      },
      {
        id: 'row5',
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada',
        phone: '123-345-7890',
      },
      {
        id: 'row6',
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy',
        phone: '123-345-7890',
      },
    ],
  },
};

export const SelectableGrid: Story = {
  args: {
    selectable: true,
    onSelect: (ids: string[]) => console.log(ids),
    columns: [
      { title: 'Company', field: 'company' },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: [
      {
        id: 'row1',
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany',
        phone: '123-345-7890',
      },
      {
        id: 'row2',
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico',
        phone: '123-345-7890',
      },
      {
        id: 'row3',
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria',
        phone: '123-345-7890',
      },
      {
        id: 'row4',
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK',
        phone: '123-345-7890',
      },
      {
        id: 'row5',
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada',
        phone: '123-345-7890',
      },
      {
        id: 'row6',
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy',
        phone: '123-345-7890',
      },
    ],
  },
};
