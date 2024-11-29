import React from 'react';

import { ChopLogicGridColumn } from '@/types';

import { StyledGridHeader, StyledGridHeaderRow } from '../Grid.styled';

import GridHeaderCell from './HeaderCell';
import SelectAllRowsCell from './SelectAllRowsCell';

type ChopLogicGridHeadProps = {
  columns: ChopLogicGridColumn[];
  gridId: string;
  selectable: boolean;
  isAllSelected: boolean;
  isAllCheckboxDisabled?: boolean;
  selectAll: () => void;
  deselectAll: () => void;
};

const ChopLogicGridHead: React.FC<ChopLogicGridHeadProps> = ({
  columns,
  gridId,
  selectAll,
  deselectAll,
  selectable,
  isAllSelected,
  isAllCheckboxDisabled = false,
}) => {
  return (
    <StyledGridHeader>
      <StyledGridHeaderRow>
        {selectable && (
          <SelectAllRowsCell
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
      </StyledGridHeaderRow>
    </StyledGridHeader>
  );
};

export default ChopLogicGridHead;
