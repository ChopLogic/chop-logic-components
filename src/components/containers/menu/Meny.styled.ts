import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledMenuBar = styled.ul<{ $theme: ChopLogicTheme; $mode: ChopLogicOrientationMode }>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: ${(props) => (props.$mode === ChopLogicOrientationMode.Vertical ? 'column' : 'row')};
  justify-content: flex-start;
  width: 100%;
`;

export const StyledSubMenuBar = styled(StyledMenuBar)`
  flex-direction: column;
  padding-left: ${(props) => props.$theme.gapBig};
  box-sizing: border-box;
  border-left: ${(props) => props.$theme.borderLight};

  ${({ $theme, $mode }) =>
    $mode === ChopLogicOrientationMode.Horizontal &&
    `
    position: absolute;
    top: 40px;
    left: 40px;
    border-radius: ${$theme.blockBorderRadius};
    border: ${$theme.borderLight};
    box-shadow: ${$theme.boxShadow};
    width: fit-content;
    background-color: ${$theme.backgroundColorBase};
    padding: ${$theme.gapMedium};
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
    background-color: ${(props) => props.$theme.backgroundColorLight};
  }

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
    outline-offset: -4px;
  }
`;

export const StyledSubMenu = styled.li<{ $theme: ChopLogicTheme; $mode: ChopLogicOrientationMode }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0;
  padding: 0;
  position: relative;

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
    outline-offset: -4px;
  }
`;

export const StyledSubMenuText = styled.span<{ $theme: ChopLogicTheme }>`
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
    background-color: ${(props) => props.$theme.backgroundColorLight};

    svg:nth-child(2) {
      color: ${(props) => props.$theme.fontColorAccent};
    }
  }
`;
