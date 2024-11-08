import React from 'react';

import { StyledGridCell } from '../Grid.styled';

const GridDataCell: React.FC<{ value: React.ReactElement | string }> = ({ value }) => {
  return <StyledGridCell>{value}</StyledGridCell>;
};

export default GridDataCell;
