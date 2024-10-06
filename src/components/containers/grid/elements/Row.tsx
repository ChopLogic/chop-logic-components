import React from 'react';

import GridDataCell from './DataCell';
import SelectGridRowCheckbox from './SelectRow';

export type GridRowProps = {
  rowId: string;
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
  values: (string | JSX.Element)[];
  disabled?: boolean;
};

const GridRow: React.FC<GridRowProps> = ({ rowId, selectRowById, deselectRowById, selectable, values, selectedIds, disabled }) => {
  return (
    <tr>
      {selectable && (
        <SelectGridRowCheckbox
          rowId={rowId}
          selectRowById={selectRowById}
          deselectRowById={deselectRowById}
          isRowSelected={selectedIds.includes(rowId)}
          disabled={disabled}
        />
      )}
      {values.map((value, index) => (
        <GridDataCell key={`row_${index}`} value={value} />
      ))}
    </tr>
  );
};

export default GridRow;
