import type { GridRowValue } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { GridDataCell } from '../data-cell/GridDataCell';
import { SelectGridRowCell } from '../select-grid-row-cell/SelectGridRowCell';
import styles from './GridRow.module.scss';

type Props = {
  rowId: string;
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
  values: GridRowValue[];
  disabled?: boolean;
};

export const GridRow: FC<Props> = ({
  rowId,
  selectRowById,
  deselectRowById,
  selectable,
  values,
  selectedIds,
  disabled,
}) => {
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
      {values.map((rowValue) => {
        const valueKey = `cell-${rowId}-${rowValue.field}`;
        return <GridDataCell key={valueKey} value={rowValue.value} />;
      })}
    </tr>
  );
};
