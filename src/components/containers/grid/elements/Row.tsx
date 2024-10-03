import React from 'react';

import { GridItem } from '../types';

import GridDataCell from './DataCell';
import SelectGridRowCheckbox from './SelectRow';

export type GridRowProps = {
  item: GridItem;
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
  values: (string | JSX.Element)[];
};

const GridRow: React.FC<GridRowProps> = ({ item, selectRowById, deselectRowById, selectable, values }) => {
  const rowId = item.id;

  return (
    <tr>
      {selectable && <SelectGridRowCheckbox rowId={rowId} selectRowById={selectRowById} deselectRowById={deselectRowById} />}
      {values.map((value, index) => (
        <GridDataCell key={`row_${index}`} value={value} />
      ))}
    </tr>
  );
};

export default GridRow;
