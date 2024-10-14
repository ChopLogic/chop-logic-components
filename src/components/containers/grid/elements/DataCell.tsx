import React from 'react';

import { StyledGridCell } from '../Grid.styled';

const GridDataCell: React.FC<{ value: string | JSX.Element }> = ({ value }) => {
  return <StyledGridCell>{value}</StyledGridCell>;
};

export default GridDataCell;
