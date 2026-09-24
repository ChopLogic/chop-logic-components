import { GridSortDirection } from '@enums';
import type { Meta, StoryObj } from '@storybook/react-vite';

import type Grid from '../Grid';
import { ControlledFilterExample, GridExample, sampleColumns, sampleData } from './Grid.example';

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
    filterableByDefault: {
      control: 'boolean',
      description: 'Whether all columns are filterable by default',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    filterState: {
      control: 'object',
      description: 'Current filter state (controlled mode)',
      table: {
        type: { summary: 'GridFilterState' },
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
    onFilterChange: {
      action: 'filterChanged',
      description: 'Callback when filter state changes',
      table: {
        type: { summary: '(state: GridFilterState) => void' },
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
    columns: sampleColumns,
    data: sampleData,
  },
};

export const SelectableGrid: Story = {
  args: {
    selectable: true,
    caption: 'Selectable Contact List',
    onSelect: (ids: string[]) => console.log(ids),
    columns: sampleColumns,
    data: sampleData,
  },
};

export const SortableGrid: Story = {
  args: {
    sortableByDefault: true,
    caption: 'Sortable Contact List',
    columns: sampleColumns,
    data: sampleData,
  },
};

export const MixedSortabilityGrid: Story = {
  args: {
    sortableByDefault: false,
    caption: 'Mixed Sortability Grid',
    columns: [
      { title: 'Company', field: 'company', sortable: true },
      { title: 'Contact', field: 'contact', sortable: true },
      { title: 'Email', field: 'email', sortable: false },
      { title: 'Country', field: 'country', sortable: true },
      { title: 'City', field: 'city', sortable: false },
      { title: 'Role', field: 'role', sortable: true },
      { title: 'Status', field: 'status', sortable: true },
      { title: 'Phone', field: 'phone' }, // uses default (false)
    ],
    data: sampleData,
  },
};

export const FilterableGrid: Story = {
  args: {
    filterableByDefault: true,
    caption: 'Filterable Contact List',
    columns: sampleColumns,
    data: sampleData,
  },
};

export const MixedFilterabilityGrid: Story = {
  args: {
    filterableByDefault: false,
    caption: 'Mixed Filterability Grid',
    columns: [
      { title: 'Company', field: 'company', filterable: true },
      { title: 'Contact', field: 'contact', filterable: true },
      { title: 'Email', field: 'email', filterable: true },
      { title: 'Country', field: 'country', filterable: false },
      { title: 'City', field: 'city', filterable: true },
      { title: 'Role', field: 'role', filterable: true },
      { title: 'Status', field: 'status', filterable: false },
      { title: 'Phone', field: 'phone' }, // uses default (false)
    ],
    data: sampleData,
  },
};

export const SortableAndFilterableGrid: Story = {
  args: {
    sortableByDefault: true,
    filterableByDefault: true,
    caption: 'Sortable & Filterable Contact List',
    columns: sampleColumns,
    data: sampleData,
  },
};

export const ControlledFilterGrid: Story = {
  render: () => <ControlledFilterExample />,
};
