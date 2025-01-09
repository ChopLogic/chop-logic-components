import React from 'react';
import { ChopLogicTheme } from '@models';

import { StyledGridCell } from '../Grid.styled';

const GridDataCell: React.FC<{ value: React.ReactElement | string; theme: ChopLogicTheme }> = ({ value, theme }) => {
  return <StyledGridCell $theme={theme}>{value}</StyledGridCell>;
};

export default GridDataCell;
