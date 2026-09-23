import { GridFilterType, GridSortDirection } from '@enums';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { GridFilterState } from '@types';
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

  describe('Filtering', () => {
    const filterableProps = {
      id: 'filterable-grid',
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'City', field: 'city' },
        { title: 'Country', field: 'country' },
      ],
      data: [
        { id: 'row1', name: 'Alice', city: 'Amsterdam', country: 'Netherlands' },
        { id: 'row2', name: 'Bob', city: 'Berlin', country: 'Germany' },
        { id: 'row3', name: 'Charlie', city: 'Copenhagen', country: 'Denmark' },
        { id: 'row4', name: 'Diana', city: 'Dublin', country: 'Ireland' },
        { id: 'row5', name: 'Adam', city: 'Athens', country: 'Greece' },
      ],
    };

    // Helper function to get data cell values from a specific column index
    const getColumnValues = (columnIndex: number): string[] => {
      const rows = screen.getAllByRole('row');
      // Skip header row (index 0)
      const dataRows = rows.slice(1);
      return dataRows.map((row) => {
        const cells = within(row).queryAllByRole('cell');
        return cells[columnIndex]?.textContent ?? '';
      });
    };

    // Helper to open filter popup for a column
    const openFilterPopup = async (columnTitle: string) => {
      const filterButton = screen.getByRole('button', {
        name: new RegExp(`filter by ${columnTitle}`, 'i'),
      });
      await userEvent.click(filterButton);
      return filterButton;
    };

    // Helper to apply a filter
    const applyFilter = async (value: string) => {
      const filterInput = screen.getByRole('textbox', { name: /filter value/i });
      await userEvent.clear(filterInput);
      await userEvent.type(filterInput, value);
      const applyButton = screen.getByRole('button', { name: /apply filter/i });
      await userEvent.click(applyButton);
    };

    // Helper to clear filter from popup
    const clearFilter = async () => {
      const clearButton = screen.getByRole('button', { name: /clear filter/i });
      await userEvent.click(clearButton);
    };

    describe('Uncontrolled Mode', () => {
      // Requirements: 9.7, 6.5
      it('should narrow displayed rows when a filter is applied and restore when cleared', async () => {
        render(<Grid {...filterableProps} filterableByDefault />);

        // Initial: all 5 rows (Alice, Bob, Charlie, Diana, Adam)
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie', 'Diana', 'Adam']);

        // Open filter popup for Name column
        await openFilterPopup('Name');

        // Apply filter that starts with 'A'
        await applyFilter('A');

        // Should now show only Alice and Adam
        expect(getColumnValues(0)).toEqual(['Alice', 'Adam']);

        // Open filter popup again
        await openFilterPopup('Name');

        // Clear the filter
        await clearFilter();

        // Close popup
        const cancelButton = screen.getByRole('button', { name: /cancel filter/i });
        await userEvent.click(cancelButton);

        // Should restore all rows
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie', 'Diana', 'Adam']);
      });

      it('should invoke onFilterChange callback in uncontrolled mode', async () => {
        const mockOnFilterChange = vi.fn();
        render(
          <Grid {...filterableProps} filterableByDefault onFilterChange={mockOnFilterChange} />,
        );

        // Open filter popup for Name column
        await openFilterPopup('Name');

        // Apply filter
        await applyFilter('A');

        expect(mockOnFilterChange).toHaveBeenCalledWith({
          name: [
            {
              type: GridFilterType.StartsWith,
              value: 'A',
              caseSensitive: false,
            },
          ],
        });
      });
    });

    describe('Controlled Mode', () => {
      // Requirements: 9.4, 9.5, 9.6
      it('should display data filtered according to filterState prop', () => {
        const controlledFilterState: GridFilterState = {
          name: [{ type: GridFilterType.StartsWith, value: 'A', caseSensitive: false }],
        };

        render(
          <Grid {...filterableProps} filterableByDefault filterState={controlledFilterState} />,
        );

        // Data should be filtered to only names starting with 'A': Alice, Adam
        expect(getColumnValues(0)).toEqual(['Alice', 'Adam']);
      });

      it('should invoke onFilterChange but NOT change display in controlled mode', async () => {
        const mockOnFilterChange = vi.fn();
        const controlledFilterState: GridFilterState = {
          name: [{ type: GridFilterType.StartsWith, value: 'A', caseSensitive: false }],
        };

        render(
          <Grid
            {...filterableProps}
            filterableByDefault
            filterState={controlledFilterState}
            onFilterChange={mockOnFilterChange}
          />,
        );

        // Initial: filtered to names starting with 'A'
        expect(getColumnValues(0)).toEqual(['Alice', 'Adam']);

        // Open filter popup for Name column
        await openFilterPopup('Name');

        // Apply a new filter (should call onFilterChange but not change display)
        await applyFilter('B');

        // onFilterChange should be called with appended condition
        expect(mockOnFilterChange).toHaveBeenCalledWith({
          name: [
            { type: GridFilterType.StartsWith, value: 'A', caseSensitive: false },
            { type: GridFilterType.StartsWith, value: 'B', caseSensitive: false },
          ],
        });

        // But display should NOT change - still controlled by props
        expect(getColumnValues(0)).toEqual(['Alice', 'Adam']);
      });

      it('should NOT modify display when onFilterChange is not provided in controlled mode', async () => {
        const controlledFilterState: GridFilterState = {
          name: [{ type: GridFilterType.StartsWith, value: 'A', caseSensitive: false }],
        };

        render(
          <Grid {...filterableProps} filterableByDefault filterState={controlledFilterState} />,
        );

        // Initial: filtered to names starting with 'A'
        expect(getColumnValues(0)).toEqual(['Alice', 'Adam']);

        // Open filter popup for Name column
        await openFilterPopup('Name');

        // Apply a new filter
        await applyFilter('B');

        // Display should NOT change - no callback to update state
        expect(getColumnValues(0)).toEqual(['Alice', 'Adam']);
      });
    });

    describe('Filter + Sort Pipeline', () => {
      // Requirements: 7.4, 7.5
      it('should order only retained rows when both filtering and sorting are active', async () => {
        render(<Grid {...filterableProps} filterableByDefault sortableByDefault />);

        // Initial order: Alice, Bob, Charlie, Diana, Adam
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie', 'Diana', 'Adam']);

        // Apply filter for names starting with 'A'
        await openFilterPopup('Name');
        await applyFilter('A');

        // Filtered: Alice, Adam
        expect(getColumnValues(0)).toEqual(['Alice', 'Adam']);

        // Now sort ascending by Name
        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);

        // Should sort only the retained rows: Adam, Alice
        expect(getColumnValues(0)).toEqual(['Adam', 'Alice']);
      });

      it('should exclude non-matching rows from the sorted result', async () => {
        render(<Grid {...filterableProps} filterableByDefault sortableByDefault />);

        // Sort first, then filter
        const nameSortButton = screen.getByRole('button', { name: /sort by name ascending/i });
        await userEvent.click(nameSortButton);

        // After ascending sort: Adam, Alice, Bob, Charlie, Diana
        expect(getColumnValues(0)).toEqual(['Adam', 'Alice', 'Bob', 'Charlie', 'Diana']);

        // Apply filter for names starting with 'B' or 'C' (using Includes)
        await openFilterPopup('Name');

        // Select Includes filter type
        const includesRadio = screen.getByRole('radio', { name: /includes/i });
        await userEvent.click(includesRadio);

        await applyFilter('ob');

        // Should show only Bob (filtered and sorted)
        expect(getColumnValues(0)).toEqual(['Bob']);
      });
    });

    describe('Empty State', () => {
      // Requirements: 8.1, 8.4, 8.5
      it('should display empty state message when no rows match the filter', async () => {
        render(<Grid {...filterableProps} filterableByDefault />);

        // Apply filter that matches nothing
        await openFilterPopup('Name');
        await applyFilter('XYZ');

        // Should show empty state message
        expect(screen.getByText('No data matches the applied filters')).toBeInTheDocument();
      });

      it('should keep header row visible when empty state is displayed', async () => {
        render(<Grid {...filterableProps} filterableByDefault />);

        // Apply filter that matches nothing
        await openFilterPopup('Name');
        await applyFilter('XYZ');

        // Header row should still be visible with column titles
        expect(screen.getByRole('columnheader', { name: /name/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /city/i })).toBeInTheDocument();
        expect(screen.getByRole('columnheader', { name: /country/i })).toBeInTheDocument();
      });

      it('should restore rows when filter is relaxed', async () => {
        render(<Grid {...filterableProps} filterableByDefault />);

        // Apply filter that matches nothing
        await openFilterPopup('Name');
        await applyFilter('XYZ');

        // Empty state should be shown
        expect(screen.getByText('No data matches the applied filters')).toBeInTheDocument();

        // Open filter popup and clear
        await openFilterPopup('Name');
        await clearFilter();

        // Close popup
        const cancelButton = screen.getByRole('button', { name: /cancel filter/i });
        await userEvent.click(cancelButton);

        // Rows should be restored
        expect(getColumnValues(0)).toEqual(['Alice', 'Bob', 'Charlie', 'Diana', 'Adam']);
        expect(screen.queryByText('No data matches the applied filters')).not.toBeInTheDocument();
      });
    });

    describe('At-Most-One-Popup', () => {
      // Requirements: 3.8
      it('should close the first popup when opening a second column popup', async () => {
        render(<Grid {...filterableProps} filterableByDefault />);

        // Open filter popup for Name column
        await openFilterPopup('Name');

        // Verify Name popup is open
        expect(screen.getByRole('dialog', { name: /filter name/i })).toBeInTheDocument();

        // Open filter popup for City column
        const cityFilterButton = screen.getByRole('button', { name: /filter by city/i });
        await userEvent.click(cityFilterButton);

        // City popup should be open
        expect(screen.getByRole('dialog', { name: /filter city/i })).toBeInTheDocument();

        // Only one popup should be visible
        const dialogs = screen.getAllByRole('dialog');
        expect(dialogs).toHaveLength(1);
        expect(dialogs[0]).toHaveAttribute('aria-label', 'Filter City');
      });

      it('should maintain at most one popup open at any time', async () => {
        render(<Grid {...filterableProps} filterableByDefault />);

        // Open Name popup
        await openFilterPopup('Name');
        expect(screen.getAllByRole('dialog')).toHaveLength(1);

        // Open City popup (Name should close)
        await openFilterPopup('City');
        expect(screen.getAllByRole('dialog')).toHaveLength(1);

        // Open Country popup (City should close)
        await openFilterPopup('Country');
        expect(screen.getAllByRole('dialog')).toHaveLength(1);

        // Verify only Country popup is open
        expect(screen.getByRole('dialog', { name: /filter country/i })).toBeInTheDocument();
      });
    });
  });
});
