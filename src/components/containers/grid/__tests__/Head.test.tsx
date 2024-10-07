import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ChopLogicGridHead from '../elements/Head';
import { ChopLogicGridColumn } from '../types';

describe('ChopLogicGridHead', () => {
  const ChopLogicGridColumns: ChopLogicGridColumn[] = [
    { title: 'Col 1', field: 'field1' },
    { title: 'Col 2', field: 'field2' },
    { title: 'Col 3', field: 'field3' },
  ];

  const testProps = {
    columns: ChopLogicGridColumns,
    gridId: 'test-grid-id',
    selectable: true,
    selectAll: vi.fn(),
    deselectAll: vi.fn(),
    isAllSelected: false,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicGridHead {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
