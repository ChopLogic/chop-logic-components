import React from 'react';
import styles from '../Grid.module.scss';
import GridDataCell from './DataCell';
import SelectGridRowCell from './SelectRowCell';
import { getClassName } from '@utils';

export type GridRowProps = {
  rowId: string;
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
  values: (string | React.ReactElement)[];
  disabled?: boolean;
};

const GridRow: React.FC<GridRowProps> = ({ rowId, selectRowById, deselectRowById, selectable, values, selectedIds, disabled }) => {
  const selected = selectedIds.includes(rowId);

  return (
    <tr className={getClassName([styles.grid_row, { [styles.grid_row__selected]: selected }])}>
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
    </tr>
  );
};

export default GridRow;
