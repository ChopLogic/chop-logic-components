import styled from 'styled-components';

import { ChopLogicTheme } from '@/models';

export const StyledMenuBar = styled.ul<{ $theme: ChopLogicTheme }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledSubMenuBar = styled(StyledMenuBar)`
  padding-left: ${(props) => props.$theme.gapBig};
`;

export const StyledMenuLeaf = styled.li<{ $theme: ChopLogicTheme }>`
  display: flex;
  justify-content: flex-start;
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

export const StyledSubMenu = styled.li<{ $theme: ChopLogicTheme; $isOpened: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 0;
`;

export const StyledSubMenuText = styled.span<{ $theme: ChopLogicTheme }>`
  display: flex;
  box-sizing: border-box;
  gap: ${(props) => props.$theme.gapMedium};
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  font-size: ${(props) => props.$theme.fontSizeBase};
  background-color: ${(props) => props.$theme.backgroundColorBase};
  padding: ${(props) => props.$theme.gapMedium};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  cursor: pointer;

  span {
    display: flex;
    gap: ${(props) => props.$theme.gapMedium};
    align-items: center;
  }

  &:hover {
    background-color: ${(props) => props.$theme.backgroundColorLight};
  }
`;
