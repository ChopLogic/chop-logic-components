import type { GridColumn, GridFilterCondition, GridFilterState, GridSortState } from '@types';
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
  sortableByDefault: boolean;
  sortState: GridSortState;
  onSortClick: (field: string) => void;
  filterableByDefault: boolean;
  filterState: GridFilterState;
  onApplyFilter: (field: string, condition: GridFilterCondition) => void;
  onClearFilter: (field: string) => void;
};

const isSortable = (column: GridColumn, sortableByDefault: boolean): boolean => {
  if (column.sortable !== undefined) {
    return column.sortable;
  }
  return sortableByDefault;
};

export const isFilterable = (column: GridColumn, filterableByDefault: boolean): boolean => {
  if (column.filterable !== undefined) {
    return column.filterable;
  }
  return filterableByDefault;
};

export const GridHead: FC<GridHeadProps> = ({
  columns,
  gridId,
  selectAll,
  deselectAll,
  selectable,
  isAllSelected,
  isAllCheckboxDisabled = false,
  sortableByDefault,
  sortState,
  onSortClick,
  filterableByDefault,
  filterState,
  onApplyFilter,
  onClearFilter,
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
            key={`${column.field}_${gridId}`}
            title={column.title}
            component={column.component}
            columnField={column.field}
            sortable={isSortable(column, sortableByDefault)}
            sortDirection={sortState.field === column.field ? sortState.direction : null}
            onSortClick={() => onSortClick(column.field)}
            filterable={isFilterable(column, filterableByDefault)}
            columnConditions={filterState[column.field]}
            onApplyFilter={(condition) => onApplyFilter(column.field, condition)}
            onClearFilter={() => onClearFilter(column.field)}
          />
        ))}
      </tr>
    </thead>
  );
};
