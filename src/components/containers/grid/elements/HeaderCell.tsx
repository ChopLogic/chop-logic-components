import React from 'react';

import { ChopLogicTheme } from '@/types';

import { StyledGridHeaderCell } from '../Grid.styled';

const GridHeaderCell: React.FC<{ title?: string; component?: React.ReactElement; theme: ChopLogicTheme }> = ({
  title,
  component,
  theme,
}) => {
  return <StyledGridHeaderCell $theme={theme}>{component ?? title ?? ''}</StyledGridHeaderCell>;
};

export default GridHeaderCell;
