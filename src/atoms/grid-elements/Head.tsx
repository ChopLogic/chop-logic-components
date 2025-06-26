import React from 'react';
import { ChopLogicGridColumn } from '@models';
import styles from '@organisms/grid/Grid.module.scss';
import { GridHeaderCell } from './HeaderCell';
import { SelectAllGridRowsCell } from './SelectAllGridRowsCell.tsx';

type ChopLogicGridHeadProps = {
  columns: ChopLogicGridColumn[];
  gridId: string;
  selectable: boolean;
  isAllSelected: boolean;
  isAllCheckboxDisabled?: boolean;
  selectAll: () => void;
  deselectAll: () => void;
};

export const GridHead: React.FC<ChopLogicGridHeadProps> = ({
  columns,
  gridId,
  selectAll,
  deselectAll,
  selectable,
  isAllSelected,
  isAllCheckboxDisabled = false,
}) => {
  return (
    <thead className={styles.header}>
      <tr className={styles.header_row}>
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
          <GridHeaderCell key={`${column.title}_${gridId}`} title={column.title} component={column.component} />
        ))}
      </tr>
    </thead>
  );
};
