import { GridSortDirection } from '@enums';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Grid from '../Grid';

describe('Grid', () => {
  const testProps = {
    id: 'grid-id',
    columns: [
      { title: 'Company', field: 'company' },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: [
      { id: 'row1', company: '', contact: 'Maria', country: 'Germany', phone: '123-345-7890' },
      { id: 'row2', company: '', contact: 'Francisco', country: 'Mexico', phone: '123-345-7890' },
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
        company: 'Laughing Bacchus',
        contact: '',
        country: 'Canada',
        phone: '123-345-7890',
      },
      { id: 'row6', company: '', contact: 'Giovanni', country: 'Italy', phone: '123-345-7890' },
    ],
    className: 'test-class',
    style: { width: 100 },
    tabIndex: -1,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<Grid {...testProps} selectable />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not render the checkbox column if the grid is not selectable', () => {
    render(<Grid {...testProps} selectable={false} />);
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0);
  });

  it('should render an optional caption', () => {
    render(<Grid {...testProps} selectable={false} caption="Test Caption" />);
    expect(screen.getByText('Test Caption')).toBeInTheDocument();
  });

  it('should call onSelect() handler when a checkbox is clicked', async () => {
    const mockSelect = vi.fn();
    render(<Grid {...testProps} selectable caption="Test Caption" onSelect={mockSelect} />);
    const firstCheckbox = screen.getAllByRole('checkbox')[0] as HTMLElement;
    const secondCheckbox = screen.getAllByRole('checkbox')[1] as HTMLElement;
    await userEvent.click(firstCheckbox);
    expect(mockSelect).toHaveBeenCalledWith(['row1', 'row2', 'row3', 'row4', 'row5', 'row6']);
    await userEvent.click(firstCheckbox);
    expect(mockSelect).toHaveBeenCalledWith([]);
    await userEvent.click(secondCheckbox);
    expect(mockSelect).toHaveBeenCalledWith(['row1']);
  });

  describe('Sorting', () => {
    const sortableProps = {
      id: 'sortable-grid',
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'City', field: 'city' },
      ],
      data: [
        { id: 'row1', name: 'Charlie', city: 'Berlin' },
        { id: 'row2', name: 'Alice', city: 'Paris' },
        { id: 'row3', name: 'Bob', city: 'Amsterdam' },
      ],
    };

    // Helper function to get data cell values from a specific column index
    const getColumnValues = (columnIndex: number): string[] => {
      const rows = screen.getAllByRole('row');
      // Skip header row (index 0)
      const dataRows = rows.slice(1);
      return dataRows.map((row) => {
        const cells = within(row).getAllByRole('cell');
        return cells[columnIndex]?.textContent ?? '';
      });
    };

    describe('Uncontrolled Mode', () => {
      // Requirements: 6.1, 6.3, 6.4
      it('should render sort buttons when sortableByDefault is true', () => {
        render(<Grid {...sortableProps} sortableByDefault />);

        const sortButtons = screen.getAllByRole('button', { name: /sort/i });
        expect(sortButtons.length).toBeGreaterThan(0);
      });

      it('should NOT render sort buttons when sortableByDefault is false (default)', () => {
        render(<Grid {...sortableProps} />);

        const sortButtons = screen.queryAllByRole('button', { name: /sort/i });
        expect(sortButtons).toHaveLength(0);
      });

      it('should update data display when sort button is clicked in uncontrolled mode', async () => {
        render(<Grid {...sortableProps} sortableByDefault />);

        // Initial order: Charlie, Alice, Bob
        expect(getColumnValues(0)).toEqual(['Charlie', 'Alice', 'Bob']);

        // Click sort button for Name column
        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);

        // After ascending sort: Alice, Bob, Charlie
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);
      });

      it('should invoke onSortChange callback in uncontrolled mode', async () => {
        const mockOnSortChange = vi.fn();
        render(<Grid {...sortableProps} sortableByDefault onSortChange={mockOnSortChange} />);

        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);

        expect(mockOnSortChange).toHaveBeenCalledWith({
          field: 'name',
          direction: GridSortDirection.Asc,
        });
      });
    });

    describe('Controlled Mode', () => {
      // Requirements: 7.1, 7.3, 7.4
      it('should display data sorted according to sortField and sortDirection props', () => {
        render(
          <Grid
            {...sortableProps}
            sortableByDefault
            sortField="name"
            sortDirection={GridSortDirection.Asc}
          />,
        );

        // Data should be sorted ascending by name: Alice, Bob, Charlie
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);
      });

      it('should display data in descending order when sortDirection is desc', () => {
        render(
          <Grid
            {...sortableProps}
            sortableByDefault
            sortField="name"
            sortDirection={GridSortDirection.Desc}
          />,
        );

        // Data should be sorted descending by name: Charlie, Bob, Alice
        expect(getColumnValues(0)).toEqual(['Charlie', 'Bob', 'Alice']);
      });

      it('should invoke onSortChange but NOT change display in controlled mode', async () => {
        const mockOnSortChange = vi.fn();
        render(
          <Grid
            {...sortableProps}
            sortableByDefault
            sortField="name"
            sortDirection={GridSortDirection.Asc}
            onSortChange={mockOnSortChange}
          />,
        );

        // Initial order (ascending): Alice, Bob, Charlie
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);

        // Click sort button - should cycle to descending
        const nameSortButton = screen.getByRole('button', { name: /sort by name descending/i });
        await userEvent.click(nameSortButton);

        // onSortChange should be called with next state
        expect(mockOnSortChange).toHaveBeenCalledWith({
          field: 'name',
          direction: GridSortDirection.Desc,
        });

        // But display should NOT change (controlled mode) - still showing prop values
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);
      });

      it('should NOT modify display when onSortChange is not provided in controlled mode', async () => {
        render(
          <Grid
            {...sortableProps}
            sortableByDefault
            sortField="name"
            sortDirection={GridSortDirection.Asc}
          />,
        );

        // Initial order (ascending): Alice, Bob, Charlie
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);

        // Click sort button
        const nameSortButton = screen.getByRole('button', { name: /sort by name descending/i });
        await userEvent.click(nameSortButton);

        // Display should NOT change - still controlled by props
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);
      });
    });

    describe('Sort State Cycle', () => {
      // Requirements: 4.1, 4.2, 4.3, 4.4
      it('should cycle through sort states: unsorted → ascending → descending → cleared', async () => {
        render(<Grid {...sortableProps} sortableByDefault />);

        // Initial: unsorted (original order: Charlie, Alice, Bob)
        expect(getColumnValues(0)).toEqual(['Charlie', 'Alice', 'Bob']);

        // First click: ascending
        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);

        // Second click: descending
        const descSortButton = screen.getByRole('button', { name: /sort by name descending/i });
        await userEvent.click(descSortButton);
        expect(getColumnValues(0)).toEqual(['Charlie', 'Bob', 'Alice']);

        // Third click: cleared (back to original order)
        const clearSortButton = screen.getByRole('button', { name: /clear name sorting/i });
        await userEvent.click(clearSortButton);
        expect(getColumnValues(0)).toEqual(['Charlie', 'Alice', 'Bob']);
      });

      it('should start ascending when clicking a different column', async () => {
        render(<Grid {...sortableProps} sortableByDefault />);

        // Sort by Name ascending first
        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie']);

        // Now click City column - should start ascending
        const citySortButton = screen.getByRole('button', { name: /sort by city ascending/i });
        await userEvent.click(citySortButton);

        // City column sorted ascending: Amsterdam, Berlin, Paris
        expect(getColumnValues(1)).toEqual(['Amsterdam', 'Berlin', 'Paris']);

        // Name sort button should now show ascending icon (cleared state)
        expect(screen.getByRole('button', { name: /sort by name ascending/i })).toBeInTheDocument();
      });
    });

    describe('onSortChange Callback', () => {
      // Requirements: 6.4, 7.3, 7.4
      it('should invoke callback with correct field and direction', async () => {
        const mockOnSortChange = vi.fn();
        render(<Grid {...sortableProps} sortableByDefault onSortChange={mockOnSortChange} />);

        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });

        // First click: ascending
        await userEvent.click(nameSortButton);
        expect(mockOnSortChange).toHaveBeenLastCalledWith({
          field: 'name',
          direction: GridSortDirection.Asc,
        });

        // Second click: descending
        const descButton = screen.getByRole('button', { name: /sort by name descending/i });
        await userEvent.click(descButton);
        expect(mockOnSortChange).toHaveBeenLastCalledWith({
          field: 'name',
          direction: GridSortDirection.Desc,
        });
      });

      it('should invoke callback with null values when sort is cleared', async () => {
        const mockOnSortChange = vi.fn();
        render(<Grid {...sortableProps} sortableByDefault onSortChange={mockOnSortChange} />);

        // Click to ascending
        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);

        // Click to descending
        const descButton = screen.getByRole('button', { name: /sort by name descending/i });
        await userEvent.click(descButton);

        // Click to clear
        const clearButton = screen.getByRole('button', { name: /clear name sorting/i });
        await userEvent.click(clearButton);

        expect(mockOnSortChange).toHaveBeenLastCalledWith({
          field: null,
          direction: null,
        });
      });

      it('should invoke callback with new column when switching columns', async () => {
        const mockOnSortChange = vi.fn();
        render(<Grid {...sortableProps} sortableByDefault onSortChange={mockOnSortChange} />);

        // Sort by Name first
        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);

        // Switch to City column
        const citySortButton = screen.getByRole('button', { name: /sort by city ascending/i });
        await userEvent.click(citySortButton);

        expect(mockOnSortChange).toHaveBeenLastCalledWith({
          field: 'city',
          direction: GridSortDirection.Asc,
        });
      });
    });
  });
});
