import { render, screen } from '@testing-library/react';
import type { GridColumn, GridItem } from '@types';
import { describe, expect, it, vi } from 'vitest';
import { GridBody } from '../body/GridBody';

describe('GridBody', () => {
  const columns: GridColumn[] = [
    { title: 'Col 1', field: 'field1' },
    { title: 'Col 2', field: 'field2' },
    { title: 'Col 3', field: 'field3' },
  ];

  const data: GridItem[] = [
    { id: 'row1', field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 4' },
    { id: 'row2', field1: 'Value 5', field2: 'Value 6', field3: 'Value 7', field4: 'Value 8' },
    { id: 'row3', field1: 'Value 9', field2: 'Value 10', field3: 'Value 11', field4: 'Value 12' },
  ];

  const testProps = {
    data,
    columns,
    selectRowById: vi.fn(),
    deselectRowById: vi.fn(),
    selectable: true,
    selectedIds: [],
    isEmpty: false,
    colSpan: 4,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <GridBody {...testProps} />
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('empty state rendering', () => {
    it('should render GridEmptyState when isEmpty is true', () => {
      render(
        <table>
          <GridBody {...testProps} isEmpty={true} colSpan={4} />
        </table>,
      );

      expect(screen.getByText('No data matches the applied filters')).toBeInTheDocument();
      expect(screen.queryAllByRole('row')).toHaveLength(1);
    });

    it('should render data rows when isEmpty is false', () => {
      render(
        <table>
          <GridBody {...testProps} isEmpty={false} />
        </table>,
      );

      expect(screen.queryByText('No data matches the applied filters')).not.toBeInTheDocument();
      // 3 data rows
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(3);
    });

    it('should forward correct colSpan to GridEmptyState', () => {
      const colSpan = 5;
      render(
        <table>
          <GridBody {...testProps} isEmpty={true} colSpan={colSpan} />
        </table>,
      );

      const cell = screen.getByText('No data matches the applied filters').closest('td');
      expect(cell).toHaveAttribute('colspan', String(colSpan));
    });

    it('should forward colSpan for selectable grid (columns + 1)', () => {
      const colSpan = columns.length + 1; // 3 columns + 1 for selection
      render(
        <table>
          <GridBody {...testProps} isEmpty={true} colSpan={colSpan} />
        </table>,
      );

      const cell = screen.getByText('No data matches the applied filters').closest('td');
      expect(cell).toHaveAttribute('colspan', String(colSpan));
    });
  });
});
