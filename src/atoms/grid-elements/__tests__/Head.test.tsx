import { ChopLogicGridColumn } from '@models';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { GridHead } from '@atoms/grid-elements/Head';

describe('GridHead', () => {
  const columns: ChopLogicGridColumn[] = [
    { title: 'Col 1', field: 'field1' },
    { title: 'Col 2', field: 'field2' },
    { title: 'Col 3', field: 'field3' },
  ];

  const testProps = {
    columns,
    gridId: 'test-grid-id',
    selectable: true,
    selectAll: vi.fn(),
    deselectAll: vi.fn(),
    isAllSelected: false,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <GridHead {...testProps} />
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
