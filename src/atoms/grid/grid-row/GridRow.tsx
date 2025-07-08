import React from 'react';
import { GridDataCell } from '@atoms/grid/data-cell/GridDataCell.tsx';
import { SelectGridRowCell } from '@atoms/grid/select-grid-row-cell/SelectGridRowCell.tsx';
import { getClassName } from '@utils';
import styles from './GridRow.module.scss';

type Props = {
  rowId: string;
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
  values: (string | React.ReactElement)[];
  disabled?: boolean;
};

export const GridRow: React.FC<Props> = ({ rowId, selectRowById, deselectRowById, selectable, values, selectedIds, disabled }) => {
  const selected = selectedIds.includes(rowId);

  return (
    <tr className={getClassName([styles.row, { [styles.row__selected]: selected }])}>
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
