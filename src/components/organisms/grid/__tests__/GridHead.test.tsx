import { GridFilterType, GridSortDirection } from '@enums';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { GridColumn, GridFilterState, GridSortState } from '@types';
import { describe, expect, it, vi } from 'vitest';
import { GridHead, isFilterable } from '../head/GridHead';

describe('GridHead', () => {
  const columns: GridColumn[] = [
    { title: 'Col 1', field: 'field1' },
    { title: 'Col 2', field: 'field2' },
    { title: 'Col 3', field: 'field3' },
  ];

  const defaultSortState: GridSortState = {
    field: null,
    direction: null,
  };

  const defaultFilterState: GridFilterState = {};

  const testProps = {
    columns,
    gridId: 'test-grid-id',
    selectable: true,
    selectAll: vi.fn(),
    deselectAll: vi.fn(),
    isAllSelected: false,
    sortableByDefault: false,
    sortState: defaultSortState,
    onSortClick: vi.fn(),
    filterableByDefault: false,
    filterState: defaultFilterState,
    onApplyFilter: vi.fn(),
    onClearFilter: vi.fn(),
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <GridHead {...testProps} />
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('sortability resolution with explicit column.sortable values', () => {
    it('should render sort button when column.sortable is explicitly true', () => {
      const columnsWithExplicitSortable: GridColumn[] = [
        { title: 'Sortable Col', field: 'sortableField', sortable: true },
        { title: 'Non-sortable Col', field: 'nonSortableField', sortable: false },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithExplicitSortable}
            selectable={false}
            sortableByDefault={false}
          />
        </table>,
      );

      const sortButtons = screen.getAllByRole('button');
      expect(sortButtons).toHaveLength(1);
      expect(screen.getByRole('button', { name: /sort by sortable col/i })).toBeInTheDocument();
    });

    it('should NOT render sort button when column.sortable is explicitly false', () => {
      const columnsWithExplicitFalse: GridColumn[] = [
        { title: 'Non-sortable Col', field: 'nonSortableField', sortable: false },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithExplicitFalse}
            selectable={false}
            sortableByDefault={true}
          />
        </table>,
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('sortability resolution with sortableByDefault', () => {
    it('should render sort buttons for all columns when sortableByDefault is true and no explicit sortable', () => {
      const columnsWithoutSortable: GridColumn[] = [
        { title: 'Col A', field: 'fieldA' },
        { title: 'Col B', field: 'fieldB' },
        { title: 'Col C', field: 'fieldC' },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithoutSortable}
            selectable={false}
            sortableByDefault={true}
          />
        </table>,
      );

      const sortButtons = screen.getAllByRole('button');
      expect(sortButtons).toHaveLength(3);
    });

    it('should NOT render sort buttons when sortableByDefault is false and no explicit sortable', () => {
      const columnsWithoutSortable: GridColumn[] = [
        { title: 'Col A', field: 'fieldA' },
        { title: 'Col B', field: 'fieldB' },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithoutSortable}
            selectable={false}
            sortableByDefault={false}
          />
        </table>,
      );

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });

  describe('explicit sortable overrides sortableByDefault', () => {
    it('should render sort button when column.sortable=true overrides sortableByDefault=false', () => {
      const mixedColumns: GridColumn[] = [
        { title: 'Explicit True', field: 'explicitTrue', sortable: true },
        { title: 'Implicit False', field: 'implicitFalse' },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={mixedColumns}
            selectable={false}
            sortableByDefault={false}
          />
        </table>,
      );

      const sortButtons = screen.getAllByRole('button');
      expect(sortButtons).toHaveLength(1);
      expect(screen.getByRole('button', { name: /sort by explicit true/i })).toBeInTheDocument();
    });

    it('should NOT render sort button when column.sortable=false overrides sortableByDefault=true', () => {
      const mixedColumns: GridColumn[] = [
        { title: 'Explicit False', field: 'explicitFalse', sortable: false },
        { title: 'Implicit True', field: 'implicitTrue' },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={mixedColumns}
            selectable={false}
            sortableByDefault={true}
          />
        </table>,
      );

      const sortButtons = screen.getAllByRole('button');
      expect(sortButtons).toHaveLength(1);
      expect(screen.getByRole('button', { name: /sort by implicit true/i })).toBeInTheDocument();
    });
  });

  describe('checkbox column (SelectAllGridRowsCell) never renders sort button', () => {
    it('should NOT render sort button in checkbox column regardless of sortableByDefault=true', () => {
      const columnsWithSortable: GridColumn[] = [
        { title: 'Sortable Col', field: 'sortableField', sortable: true },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={true}
            sortableByDefault={true}
          />
        </table>,
      );

      // Get all header cells
      const headerCells = screen.getAllByRole('columnheader');
      // First cell should be checkbox column
      const checkboxCell = headerCells[0];
      const checkboxCellButtons = within(checkboxCell).queryAllByRole('button');
      // The checkbox cell should have a checkbox, not a sort button
      expect(checkboxCellButtons).toHaveLength(0);
      expect(within(checkboxCell).getByRole('checkbox')).toBeInTheDocument();
    });

    it('should render sort buttons only in data columns when selectable is true', () => {
      const columnsWithSortable: GridColumn[] = [
        { title: 'Col A', field: 'fieldA' },
        { title: 'Col B', field: 'fieldB' },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={true}
            sortableByDefault={true}
          />
        </table>,
      );

      // Should have sort buttons only in data columns, not in checkbox column
      const sortButtons = screen.getAllByRole('button', { name: /sort/i });
      expect(sortButtons).toHaveLength(2);
    });
  });

  describe('onSortClick callback', () => {
    it('should call onSortClick with correct field when sort button is clicked', async () => {
      const onSortClick = vi.fn();
      const columnsWithSortable: GridColumn[] = [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Age', field: 'age', sortable: true },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={false}
            onSortClick={onSortClick}
          />
        </table>,
      );

      const nameSortButton = screen.getByRole('button', { name: /sort by name/i });
      await userEvent.click(nameSortButton);

      expect(onSortClick).toHaveBeenCalledTimes(1);
      expect(onSortClick).toHaveBeenCalledWith('name');
    });

    it('should call onSortClick with second column field when its sort button is clicked', async () => {
      const onSortClick = vi.fn();
      const columnsWithSortable: GridColumn[] = [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Age', field: 'age', sortable: true },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={false}
            onSortClick={onSortClick}
          />
        </table>,
      );

      const ageSortButton = screen.getByRole('button', { name: /sort by age/i });
      await userEvent.click(ageSortButton);

      expect(onSortClick).toHaveBeenCalledTimes(1);
      expect(onSortClick).toHaveBeenCalledWith('age');
    });
  });

  describe('sortDirection passed to sorted column', () => {
    it('should pass ascending direction to the sorted column', () => {
      const columnsWithSortable: GridColumn[] = [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Age', field: 'age', sortable: true },
      ];

      const sortState: GridSortState = {
        field: 'name',
        direction: GridSortDirection.Asc,
      };

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={false}
            sortState={sortState}
          />
        </table>,
      );

      // Name column should show ascending (ChevronUp icon) and correct aria-label
      expect(screen.getByRole('button', { name: 'Sort by Name descending' })).toBeInTheDocument();
    });

    it('should pass descending direction to the sorted column', () => {
      const columnsWithSortable: GridColumn[] = [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Age', field: 'age', sortable: true },
      ];

      const sortState: GridSortState = {
        field: 'name',
        direction: GridSortDirection.Desc,
      };

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={false}
            sortState={sortState}
          />
        </table>,
      );

      // Name column should show descending (ChevronDown icon) and correct aria-label
      expect(screen.getByRole('button', { name: 'Clear Name sorting' })).toBeInTheDocument();
    });
  });

  describe('other columns show null sortDirection when one column is sorted', () => {
    it('should show null direction (ChevronsUp) for unsorted columns', () => {
      const columnsWithSortable: GridColumn[] = [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Age', field: 'age', sortable: true },
        { title: 'City', field: 'city', sortable: true },
      ];

      const sortState: GridSortState = {
        field: 'name',
        direction: GridSortDirection.Asc,
      };

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={false}
            sortState={sortState}
          />
        </table>,
      );

      // Name is sorted ascending, Age and City should show unsorted state
      expect(screen.getByRole('button', { name: 'Sort by Name descending' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Sort by Age ascending' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Sort by City ascending' })).toBeInTheDocument();
    });

    it('should display correct icons for sorted vs unsorted columns', () => {
      const columnsWithSortable: GridColumn[] = [
        { title: 'Name', field: 'name', sortable: true },
        { title: 'Age', field: 'age', sortable: true },
      ];

      const sortState: GridSortState = {
        field: 'age',
        direction: GridSortDirection.Desc,
      };

      render(
        <table>
          <GridHead
            {...testProps}
            columns={columnsWithSortable}
            selectable={false}
            sortState={sortState}
          />
        </table>,
      );

      const nameButton = screen.getByRole('button', { name: /sort by name/i });
      const ageButton = screen.getByRole('button', { name: /clear age/i });

      // Name should have ChevronsUp (unsorted)
      const nameIcon = nameButton.querySelector('.cl-icon');
      expect(nameIcon).toHaveClass('chop-icon__circle');

      // Age should have ChevronDown (sorted desc)
      const ageIcon = ageButton.querySelector('.cl-icon');
      expect(ageIcon).toHaveClass('chop-icon__arrow-down-circle');
    });
  });

  describe('mixed sortable configuration', () => {
    it('should correctly handle mix of explicit and default sortability', () => {
      const mixedColumns: GridColumn[] = [
        { title: 'Always Sortable', field: 'alwaysSortable', sortable: true },
        { title: 'Never Sortable', field: 'neverSortable', sortable: false },
        { title: 'Default Sortable', field: 'defaultSortable' },
      ];

      render(
        <table>
          <GridHead
            {...testProps}
            columns={mixedColumns}
            selectable={false}
            sortableByDefault={true}
          />
        </table>,
      );

      // Should have 2 sort buttons: Always Sortable and Default Sortable
      const sortButtons = screen.getAllByRole('button');
      expect(sortButtons).toHaveLength(2);
      expect(screen.getByRole('button', { name: /sort by always sortable/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sort by default sortable/i })).toBeInTheDocument();
      // Never Sortable should not have a button
      expect(screen.queryByRole('button', { name: /never sortable/i })).not.toBeInTheDocument();
    });
  });

  describe('snapshot with sorting enabled', () => {
    it('should match snapshot with sortableByDefault=true', () => {
      const { asFragment } = render(
        <table>
          <GridHead {...testProps} sortableByDefault={true} selectable={false} />
        </table>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot with sorted column', () => {
      const sortState: GridSortState = {
        field: 'field1',
        direction: GridSortDirection.Asc,
      };

      const { asFragment } = render(
        <table>
          <GridHead
            {...testProps}
            sortableByDefault={true}
            selectable={false}
            sortState={sortState}
          />
        </table>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

describe('isFilterable helper', () => {
  describe('column.filterable is explicitly true', () => {
    it('should return true when column.filterable=true and filterableByDefault=true', () => {
      const column: GridColumn = { field: 'test', filterable: true };
      expect(isFilterable(column, true)).toBe(true);
    });

    it('should return true when column.filterable=true and filterableByDefault=false', () => {
      const column: GridColumn = { field: 'test', filterable: true };
      expect(isFilterable(column, false)).toBe(true);
    });
  });

  describe('column.filterable is explicitly false', () => {
    it('should return false when column.filterable=false and filterableByDefault=true', () => {
      const column: GridColumn = { field: 'test', filterable: false };
      expect(isFilterable(column, true)).toBe(false);
    });

    it('should return false when column.filterable=false and filterableByDefault=false', () => {
      const column: GridColumn = { field: 'test', filterable: false };
      expect(isFilterable(column, false)).toBe(false);
    });
  });

  describe('column.filterable is omitted', () => {
    it('should return true when column.filterable is omitted and filterableByDefault=true', () => {
      const column: GridColumn = { field: 'test' };
      expect(isFilterable(column, true)).toBe(true);
    });

    it('should return false when column.filterable is omitted and filterableByDefault=false', () => {
      const column: GridColumn = { field: 'test' };
      expect(isFilterable(column, false)).toBe(false);
    });
  });
});

describe('GridHead filter prop threading', () => {
  const defaultSortState: GridSortState = {
    field: null,
    direction: null,
  };

  const defaultFilterState: GridFilterState = {};

  const baseProps = {
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Age', field: 'age' },
    ] as GridColumn[],
    gridId: 'test-grid-id',
    selectable: false,
    selectAll: vi.fn(),
    deselectAll: vi.fn(),
    isAllSelected: false,
    sortableByDefault: false,
    sortState: defaultSortState,
    onSortClick: vi.fn(),
    filterableByDefault: false,
    filterState: defaultFilterState,
    onApplyFilter: vi.fn(),
    onClearFilter: vi.fn(),
  };

  describe('filterability resolution with explicit column.filterable values', () => {
    it('should render filter button when column.filterable is explicitly true', () => {
      const columnsWithExplicitFilterable: GridColumn[] = [
        { title: 'Filterable Col', field: 'filterableField', filterable: true },
        { title: 'Non-filterable Col', field: 'nonFilterableField', filterable: false },
      ];

      render(
        <table>
          <GridHead
            {...baseProps}
            columns={columnsWithExplicitFilterable}
            filterableByDefault={false}
          />
        </table>,
      );

      const filterButtons = screen.getAllByRole('button', { name: /filter/i });
      expect(filterButtons).toHaveLength(1);
      expect(screen.getByRole('button', { name: /filter by filterable col/i })).toBeInTheDocument();
    });

    it('should NOT render filter button when column.filterable is explicitly false', () => {
      const columnsWithExplicitFalse: GridColumn[] = [
        { title: 'Non-filterable Col', field: 'nonFilterableField', filterable: false },
      ];

      render(
        <table>
          <GridHead {...baseProps} columns={columnsWithExplicitFalse} filterableByDefault={true} />
        </table>,
      );

      expect(screen.queryByRole('button', { name: /filter/i })).not.toBeInTheDocument();
    });
  });

  describe('filterability resolution with filterableByDefault', () => {
    it('should render filter buttons for all columns when filterableByDefault is true and no explicit filterable', () => {
      const columnsWithoutFilterable: GridColumn[] = [
        { title: 'Col A', field: 'fieldA' },
        { title: 'Col B', field: 'fieldB' },
        { title: 'Col C', field: 'fieldC' },
      ];

      render(
        <table>
          <GridHead {...baseProps} columns={columnsWithoutFilterable} filterableByDefault={true} />
        </table>,
      );

      const filterButtons = screen.getAllByRole('button', { name: /filter/i });
      expect(filterButtons).toHaveLength(3);
    });

    it('should NOT render filter buttons when filterableByDefault is false and no explicit filterable', () => {
      const columnsWithoutFilterable: GridColumn[] = [
        { title: 'Col A', field: 'fieldA' },
        { title: 'Col B', field: 'fieldB' },
      ];

      render(
        <table>
          <GridHead {...baseProps} columns={columnsWithoutFilterable} filterableByDefault={false} />
        </table>,
      );

      expect(screen.queryByRole('button', { name: /filter/i })).not.toBeInTheDocument();
    });
  });

  describe('explicit filterable overrides filterableByDefault', () => {
    it('should render filter button when column.filterable=true overrides filterableByDefault=false', () => {
      const mixedColumns: GridColumn[] = [
        { title: 'Explicit True', field: 'explicitTrue', filterable: true },
        { title: 'Implicit False', field: 'implicitFalse' },
      ];

      render(
        <table>
          <GridHead {...baseProps} columns={mixedColumns} filterableByDefault={false} />
        </table>,
      );

      const filterButtons = screen.getAllByRole('button', { name: /filter/i });
      expect(filterButtons).toHaveLength(1);
      expect(screen.getByRole('button', { name: /filter by explicit true/i })).toBeInTheDocument();
    });

    it('should NOT render filter button when column.filterable=false overrides filterableByDefault=true', () => {
      const mixedColumns: GridColumn[] = [
        { title: 'Explicit False', field: 'explicitFalse', filterable: false },
        { title: 'Implicit True', field: 'implicitTrue' },
      ];

      render(
        <table>
          <GridHead {...baseProps} columns={mixedColumns} filterableByDefault={true} />
        </table>,
      );

      const filterButtons = screen.getAllByRole('button', { name: /filter/i });
      expect(filterButtons).toHaveLength(1);
      expect(screen.getByRole('button', { name: /filter by implicit true/i })).toBeInTheDocument();
    });
  });

  describe('onApplyFilter callback', () => {
    it('should call onApplyFilter with correct field when a filter is applied', async () => {
      const onApplyFilter = vi.fn();
      const columnsWithFilterable: GridColumn[] = [
        { title: 'Name', field: 'name', filterable: true },
        { title: 'Age', field: 'age', filterable: true },
      ];

      render(
        <table>
          <GridHead {...baseProps} columns={columnsWithFilterable} onApplyFilter={onApplyFilter} />
        </table>,
      );

      // Open the filter popup for the Name column
      const nameFilterButton = screen.getByRole('button', { name: /filter by name/i });
      await userEvent.click(nameFilterButton);

      // Enter a filter value and apply
      const textInput = screen.getByRole('textbox');
      await userEvent.type(textInput, 'test value');

      const applyButton = screen.getByRole('button', { name: /apply/i });
      await userEvent.click(applyButton);

      expect(onApplyFilter).toHaveBeenCalledTimes(1);
      expect(onApplyFilter).toHaveBeenCalledWith(
        'name',
        expect.objectContaining({
          value: 'test value',
        }),
      );
    });
  });

  describe('onClearFilter callback', () => {
    it('should call onClearFilter with correct field when clear is clicked', async () => {
      const onClearFilter = vi.fn();
      const columnsWithFilterable: GridColumn[] = [
        { title: 'Name', field: 'name', filterable: true },
      ];

      const filterState: GridFilterState = {
        name: [{ type: GridFilterType.StartsWith, value: 'test', caseSensitive: false }],
      };

      render(
        <table>
          <GridHead
            {...baseProps}
            columns={columnsWithFilterable}
            filterState={filterState}
            onClearFilter={onClearFilter}
          />
        </table>,
      );

      // Open the filter popup
      const filterButton = screen.getByRole('button', { name: /filter by name/i });
      await userEvent.click(filterButton);

      // Click clear
      const clearButton = screen.getByRole('button', { name: /clear/i });
      await userEvent.click(clearButton);

      expect(onClearFilter).toHaveBeenCalledTimes(1);
      expect(onClearFilter).toHaveBeenCalledWith('name');
    });
  });

  describe('columnConditions prop threading', () => {
    it('should pass columnConditions from filterState to the correct column', async () => {
      const columnsWithFilterable: GridColumn[] = [
        { title: 'Name', field: 'name', filterable: true },
        { title: 'Age', field: 'age', filterable: true },
      ];

      const filterState: GridFilterState = {
        name: [{ type: GridFilterType.StartsWith, value: 'test', caseSensitive: false }],
      };

      render(
        <table>
          <GridHead {...baseProps} columns={columnsWithFilterable} filterState={filterState} />
        </table>,
      );

      // The Name column's filter button should show as active (has conditions)
      const nameFilterButton = screen.getByRole('button', { name: /filter by name/i });
      expect(nameFilterButton).toHaveClass('cl-grid-filter-button_active');

      // The Age column's filter button should not be active
      const ageFilterButton = screen.getByRole('button', { name: /filter by age/i });
      expect(ageFilterButton).not.toHaveClass('cl-grid-filter-button_active');
    });
  });

  describe('mixed sortable and filterable configuration', () => {
    it('should correctly handle columns with both sortable and filterable', () => {
      const mixedColumns: GridColumn[] = [
        { title: 'Both', field: 'both', sortable: true, filterable: true },
        { title: 'Sort Only', field: 'sortOnly', sortable: true, filterable: false },
        { title: 'Filter Only', field: 'filterOnly', sortable: false, filterable: true },
        { title: 'Neither', field: 'neither', sortable: false, filterable: false },
      ];

      render(
        <table>
          <GridHead {...baseProps} columns={mixedColumns} />
        </table>,
      );

      // Both column should have both buttons
      expect(screen.getByRole('button', { name: /sort by both/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /filter by both/i })).toBeInTheDocument();

      // Sort Only column should have only sort button
      expect(screen.getByRole('button', { name: /sort by sort only/i })).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /filter by sort only/i }),
      ).not.toBeInTheDocument();

      // Filter Only column should have only filter button
      expect(
        screen.queryByRole('button', { name: /sort by filter only/i }),
      ).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /filter by filter only/i })).toBeInTheDocument();

      // Neither column should have no buttons
      expect(screen.queryByRole('button', { name: /sort by neither/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /filter by neither/i })).not.toBeInTheDocument();
    });
  });

  describe('snapshot with filtering enabled', () => {
    it('should match snapshot with filterableByDefault=true', () => {
      const { asFragment } = render(
        <table>
          <GridHead {...baseProps} filterableByDefault={true} />
        </table>,
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot with active filter conditions', () => {
      const filterState: GridFilterState = {
        name: [{ type: GridFilterType.StartsWith, value: 'test', caseSensitive: false }],
      };

      const { asFragment } = render(
        <table>
          <GridHead {...baseProps} filterableByDefault={true} filterState={filterState} />
        </table>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
