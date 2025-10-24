import type { GridColumn } from '@models';
import type { FC } from 'react';

import { GridHeaderCell } from '../header-cell/HeaderCell';
import { SelectAllGridRowsCell } from '../select-all-grid-rows-cell/SelectAllGridRowsCell';
import styles from './GridHead.module.scss';

type GridHeadProps = {
  columns: GridColumn[];
  gridId: string;
  selectable: boolean;
  isAllSelected: boolean;
  isAllCheckboxDisabled?: boolean;
  selectAll: () => void;
  deselectAll: () => void;
};

export const GridHead: FC<GridHeadProps> = ({
  columns,
  gridId,
  selectAll,
  deselectAll,
  selectable,
  isAllSelected,
  isAllCheckboxDisabled = false,
}) => {
  return (
    <thead className={styles.head}>
      <tr className={styles.head_row}>
        {selectable && (
          <SelectAllGridRowsCell
            isAllSelected={isAllSelected}
            disabled={isAllCheckboxDisabled}
            gridId={gridId}
            selectAll={selectAll}
            deselectAll={deselectAll}
          />
        )}
        {columns.map((column) => (
          <GridHeaderCell
            key={`${column.title}_${gridId}`}
            title={column.title}
            component={column.component}
          />
        ))}
      </tr>
    </thead>
  );
};
