import type { GridColumn } from '@types';
import type { FC } from 'react';

import { GridHeaderCell } from '../header-cell/HeaderCell';
import { SelectAllGridRowsCell } from '../select-all-grid-rows-cell/SelectAllGridRowsCell';
import './GridHead.css';

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
    <thead className="cl-grid-head">
      <tr className="cl-grid-head__row">
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
