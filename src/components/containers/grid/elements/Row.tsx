import React from 'react';

import { StyledGridRow } from '../Grid.styled';

import GridDataCell from './DataCell';
import SelectGridRowCell from './SelectRowCell';

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
  const selected = selectedIds.includes(rowId);

  return (
    <StyledGridRow $selected={selected}>
      {selectable && (
        <SelectGridRowCell
          rowId={rowId}
          selectRowById={selectRowById}
          deselectRowById={deselectRowById}
          isRowSelected={selected}
          disabled={disabled}
        />
      )}
      {values.map((value, index) => (
        <GridDataCell key={`row_${index}`} value={value} />
      ))}
    </StyledGridRow>
  );
};

export default GridRow;
