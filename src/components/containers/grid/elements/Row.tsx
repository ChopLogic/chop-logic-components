import React from 'react';

import { ChopLogicTheme } from '@/models';

import { StyledGridRow } from '../Grid.styled';

import GridDataCell from './DataCell';
import SelectGridRowCell from './SelectRowCell';

export type GridRowProps = {
  rowId: string;
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
  values: (string | React.ReactElement)[];
  disabled?: boolean;
  theme: ChopLogicTheme;
};

const GridRow: React.FC<GridRowProps> = ({ rowId, selectRowById, deselectRowById, selectable, values, selectedIds, disabled, theme }) => {
  const selected = selectedIds.includes(rowId);

  return (
    <StyledGridRow $selected={selected} $theme={theme}>
      {selectable && (
        <SelectGridRowCell
          rowId={rowId}
          selectRowById={selectRowById}
          deselectRowById={deselectRowById}
          isRowSelected={selected}
          disabled={disabled}
          theme={theme}
        />
      )}
      {values.map((value, index) => (
        <GridDataCell key={`row_${index}`} value={value} theme={theme} />
      ))}
    </StyledGridRow>
  );
};

export default GridRow;
