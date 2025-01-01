import styled from 'styled-components';

import { ChopLogicTheme } from '@/models';

export const StyledMenuBar = styled.ul<{ $theme: ChopLogicTheme }>`
  list-style: none;
  margin: 0;
`;

export const StyledMenuLeaf = styled.li<{ $theme: ChopLogicTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.$theme.gapMedium};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  font-size: ${(props) => props.$theme.fontSizeBase};
  background-color: ${(props) => props.$theme.backgroundColorBase};
  padding: ${(props) => props.$theme.gapMedium};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$theme.backgroundColorLight};
  }
`;

export const StyledSubMenuItem = styled(StyledMenuLeaf)`
  color: red;
`;
