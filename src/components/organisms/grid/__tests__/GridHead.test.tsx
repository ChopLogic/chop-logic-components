import { render } from '@testing-library/react';
import type { GridColumn } from '@types';
import { describe, expect, it, vi } from 'vitest';
import { GridHead } from '../head/GridHead';

describe('GridHead', () => {
  const columns: GridColumn[] = [
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
