import React from 'react';

import GridDataCell from './DataCell';
import SelectGridRowCheckbox from './SelectRow';

export type GridRowProps = {
  rowId: string;
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
  values: (string | JSX.Element)[];
};

const GridRow: React.FC<GridRowProps> = ({ rowId, selectRowById, deselectRowById, selectable, values }) => {
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
