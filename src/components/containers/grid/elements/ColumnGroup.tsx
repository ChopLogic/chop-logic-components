import React from 'react';

import { StyledGridColumn } from '../Grid.styled';
import { ChopLogicGridColumn } from '../types';

const GridColumnGroup: React.FC<{ columns: ChopLogicGridColumn[] }> = ({ columns }) => {
  return (
    <colgroup>
      {columns.map((column, index) => (
        <StyledGridColumn $isFirst={index === 0} key={column?.title} />
      ))}
    </colgroup>
  );
};

export default GridColumnGroup;
