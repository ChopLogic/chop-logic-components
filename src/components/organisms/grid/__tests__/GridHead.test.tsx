import { GridSortDirection } from '@enums';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { GridColumn, GridSortState } from '@types';
import { describe, expect, it, vi } from 'vitest';
import { GridHead } from '../head/GridHead';

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
