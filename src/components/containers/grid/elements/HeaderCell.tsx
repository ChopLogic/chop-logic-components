import React from 'react';

import { StyledGridHeaderCell } from '../Grid.styled';

const GridHeaderCell: React.FC<{ title?: string; component?: React.ReactElement }> = ({ title, component }) => {
  return <StyledGridHeaderCell>{component ?? title ?? ''}</StyledGridHeaderCell>;
};

export default GridHeaderCell;
