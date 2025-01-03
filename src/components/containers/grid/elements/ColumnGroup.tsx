import React from 'react';
import { ChopLogicGridColumn, ChopLogicTheme } from '@models';

import { StyledGridColumn } from '../Grid.styled';

const GridColumnGroup: React.FC<{ columns: ChopLogicGridColumn[]; selectable: boolean; theme: ChopLogicTheme }> = ({
  columns,
  selectable,
  theme,
}) => {
  return (
    <colgroup>
      {selectable && <StyledGridColumn $isFirst={true} $highlighted={false} $theme={theme} />}
      {columns.map((column, index) => (
        <StyledGridColumn
          $isFirst={index === 0 && !selectable}
          key={column?.title}
          $highlighted={!!column?.highlighted}
          className={column?.className}
          $theme={theme}
        />
      ))}
    </colgroup>
  );
};

export default GridColumnGroup;
