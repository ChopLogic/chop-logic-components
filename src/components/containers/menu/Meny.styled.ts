import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

import { fadeInAnimation } from '@css';

export const StyledMenuBar = styled.ul<{ $theme: ChopLogicTheme; $mode: ChopLogicOrientationMode }>`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
  display: flex;
  gap: ${(props) => props.$theme.gapSmall};
  flex-direction: ${(props) => (props.$mode === ChopLogicOrientationMode.Vertical ? 'column' : 'row')};
  justify-content: flex-start;
  width: 100%;
`;

export const StyledSubMenuBar = styled(StyledMenuBar)`
  flex-direction: column;
  padding-left: ${(props) => props.$theme.gapBig};
  margin-left: ${(props) => props.$theme.gapBig};
  margin-top: ${(props) => props.$theme.gapSmall};
  box-sizing: border-box;
  border-left: ${(props) => props.$theme.borderLight};
  ${fadeInAnimation}

  ${({ $theme, $mode }) =>
    $mode === ChopLogicOrientationMode.Horizontal &&
    `
      position: absolute;
      top: 100%;
      left: 40%;
      width: max-content;
      border-radius: ${$theme.blockBorderRadius};
      border: ${$theme.borderLight};
      box-shadow: ${$theme.boxShadow};
      background-color: ${$theme.backgroundColorBase};
      padding: ${$theme.gapMedium};
      margin: 0;
      z-index: ${$theme.zIndexPopup};
  `}
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
    color: ${(props) => props.$theme.fontColorAccent};
  }

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
  }
`;

export const StyledSubMenu = styled.li<{ $theme: ChopLogicTheme }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 0;
  position: relative;
  border-radius: ${(props) => props.$theme.blockBorderRadius};

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
  }
`;

export const StyledSubMenuText = styled.span<{ $theme: ChopLogicTheme; $mode: ChopLogicOrientationMode }>`
  position: relative;
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
    color: ${(props) => props.$theme.fontColorAccent};
  }
`;
