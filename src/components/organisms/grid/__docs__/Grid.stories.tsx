import { GridSortDirection } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type Grid from '../Grid';
import { ControlledSortGridExample, GridExample } from './Grid.example';

const meta: Meta<typeof Grid> = {
  component: GridExample,
  title: 'Organisms/Grid',
  argTypes: {
    // Content
    data: {
      control: 'object',
      description: 'Array of data items to display in the grid',
      table: {
        type: { summary: 'Record<string, any>[]' },
        category: 'Content',
      },
    },
    columns: {
      control: 'object',
      description: 'Array of column definitions for the grid',
      table: {
        type: { summary: 'GridColumn[]' },
        category: 'Content',
      },
    },
    caption: {
      control: 'text',
      description: 'Optional caption/title for the grid',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    // Behavior
    selectable: {
      control: 'boolean',
      description: 'Whether rows can be selected',
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    sortableByDefault: {
      control: 'boolean',
      description: 'Whether all columns are sortable by default',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    sortField: {
      control: 'text',
      description: 'Field name of the currently sorted column (controlled mode)',
      table: {
        type: { summary: 'string' },
        category: 'Behavior',
      },
    },
    sortDirection: {
      control: 'select',
      options: [undefined, GridSortDirection.Asc, GridSortDirection.Desc],
      description: 'Current sort direction (controlled mode)',
      table: {
        type: { summary: 'GridSortDirection' },
        category: 'Behavior',
      },
    },
    renderDataItem: {
      control: 'object',
      description: 'Custom render function for grid cells',
      table: {
        type: { summary: '(item: Record<string, any>, field: string) => ReactNode' },
        category: 'Behavior',
      },
    },
    // Interaction
    onSelect: {
      action: 'selected',
      description: 'Callback function when rows are selected',
      table: {
        type: { summary: '(ids: string[]) => void' },
        category: 'Interaction',
      },
    },
    onSortChange: {
      action: 'sortChanged',
      description: 'Callback when sort state changes',
      table: {
        type: { summary: '(state: GridSortState) => void' },
        category: 'Interaction',
      },
    },
    // Styling
    className: {
      control: 'text',
      description: 'Additional CSS class for custom styling',
      table: {
        type: { summary: 'string' },
        category: 'Styling',
      },
    },
    style: {
      control: 'object',
      description: 'Inline CSS styles for the grid',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Styling',
      },
    },
    // Identification
    id: {
      control: 'text',
      description: 'Unique identifier for the grid',
      table: {
        type: { summary: 'string' },
        category: 'Identification',
      },
    },
    title: {
      control: 'text',
      description: 'Accessibility title for the grid',
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

const sampleData = [
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
    phone: '234-456-8901',
  },
  {
    id: 'row3',
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria',
    phone: '345-567-9012',
  },
  {
    id: 'row4',
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK',
    phone: '456-678-0123',
  },
  {
    id: 'row5',
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada',
    phone: '567-789-1234',
  },
  {
    id: 'row6',
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy',
    phone: '678-890-2345',
  },
];

export const SortableGrid: Story = {
  args: {
    sortableByDefault: true,
    caption: 'Sortable Contact List',
    columns: [
      { title: 'Company', field: 'company' },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: sampleData,
  },
};

export const ControlledSortGrid: Story = {
  render: (args) => <ControlledSortGridExample {...args} />,
  args: {
    caption: 'Controlled Sort Grid',
    columns: [
      { title: 'Company', field: 'company' },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: sampleData,
    sortableByDefault: true,
  },
};

export const MixedSortabilityGrid: Story = {
  args: {
    sortableByDefault: false,
    caption: 'Mixed Sortability Grid',
    columns: [
      { title: 'Company', field: 'company', sortable: true },
      { title: 'Contact', field: 'contact', sortable: true },
      { title: 'Country', field: 'country', sortable: false },
      { title: 'Phone', field: 'phone' }, // uses default (false)
    ],
    data: sampleData,
  },
};
