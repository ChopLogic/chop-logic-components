import React from 'react';

import { ChopLogicGridColumn } from '@/types';

import { StyledGridColumn } from '../Grid.styled';

const GridColumnGroup: React.FC<{ columns: ChopLogicGridColumn[]; selectable: boolean }> = ({ columns, selectable }) => {
  return (
    <colgroup>
      {selectable && <StyledGridColumn $isFirst={true} $highlighted={false} />}
      {columns.map((column, index) => (
        <StyledGridColumn
          $isFirst={index === 0 && !selectable}
          key={column?.title}
          $highlighted={!!column?.highlighted}
          className={column?.className}
        />
      ))}
    </colgroup>
  );
};

export default GridColumnGroup;
