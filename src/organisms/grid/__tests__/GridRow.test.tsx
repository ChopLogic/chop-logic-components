import { GridRow } from '@organisms/grid/grid-row/GridRow';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('GridRow', () => {
  const testProps = {
    rowId: 'item-1',
    selectRowById: vi.fn(),
    deselectRowById: vi.fn(),
    selectable: true,
    values: [
      { value: 'Value 1', field: 'col1' },
      { value: 'Value 2', field: 'col2' },
      { value: <span key='value-3'>Value 3</span>, field: 'col3' },
    ],
    selectedIds: ['value1', 'value2', 'value3'],
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <tbody>
          <GridRow {...testProps} />
        </tbody>
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not render a checkbox if the row is not selectable', () => {
    render(
      <table>
        <tbody>
          <GridRow {...testProps} selectable={false} />
        </tbody>
      </table>,
    );
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });
});
