import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ChopLogicGridBody from '../elements/Body';
import { ChopLogicGridColumn, ChopLogicGridItem } from '../types';

describe('ChopLogicGridBody', () => {
  const ChopLogicGridColumns: ChopLogicGridColumn[] = [
    { title: 'Col 1', field: 'field1' },
    { title: 'Col 2', field: 'field2' },
    { title: 'Col 3', field: 'field3' },
  ];

  const gridData: ChopLogicGridItem[] = [
    { id: 'row1', field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 4' },
    { id: 'row2', field1: 'Value 5', field2: 'Value 6', field3: 'Value 7', field4: 'Value 8' },
    { id: 'row3', field1: 'Value 9', field2: 'Value 10', field3: 'Value 11', field4: 'Value 12' },
  ];

  const testProps = {
    data: gridData,
    columns: ChopLogicGridColumns,
    selectRowById: vi.fn(),
    deselectRowById: vi.fn(),
    selectable: true,
    selectedIds: [],
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <ChopLogicGridBody {...testProps} />
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
