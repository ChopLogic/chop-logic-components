import styled from 'styled-components';

import { ChopLogicTabsMode } from '@/enums';
import { ChopLogicTheme } from '@/types';

export const StyledTabButton = styled.button<{ $selected: boolean; $disabled: boolean; $mode: ChopLogicTabsMode; $theme: ChopLogicTheme }>`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  padding: ${(props) => props.$theme.gapMedium};
  cursor: pointer;
  font-size: ${(props) => props.$theme.fontSizeBase};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  overflow: hidden;
  border-top-left-radius: ${(props) => props.$theme.blockBorderRadius};
  border-top-right-radius: ${(props) => props.$theme.blockBorderRadius};

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
    outline-offset: -4px;
  }

  &:hover,
  &:active {
    text-shadow: ${(props) => props.$theme.textShadow};
    color: ${(props) => props.$theme.fontColorAccent};
  }

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}

  ${(props) =>
    props.$selected &&
    `   
      border-top: ${props.$theme.borderLight};
      border-right: ${props.$theme.borderLight};
      border-left: ${props.$theme.borderLight};
      background-color: ${props.$theme.backgroundColorBase};
      top: 1px;
    `}

    ${(props) =>
    props.$mode === ChopLogicTabsMode.Vertical &&
    `
      border-bottom-left-radius: ${props.$theme.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${(props) =>
    props.$mode === ChopLogicTabsMode.Vertical &&
    props.$selected &&
    `
      border-top: ${props.$theme.borderLight};
      border-right: none;
      border-left: ${props.$theme.borderLight};
      border-bottom: ${props.$theme.borderLight};
      top: 0px;
      left: 1px;
    `}
`;

export const StyledTabContent = styled.div<{ $theme: ChopLogicTheme }>`
  background-color: ${(props) => props.$theme.backgroundColorBase};
  color: ${(props) => props.$theme.fontColorBase};
  font-size: ${(props) => props.$theme.fontSizeBase};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  padding: ${(props) => props.$theme.gapBig};
  flex-grow: 1;
`;

export const StyledTabList = styled.div<{ $mode: ChopLogicTabsMode; $theme: ChopLogicTheme }>`
  border-bottom: ${(props) => props.$theme.borderLight};
  padding: 0 ${(props) => props.$theme.gapMedium};
  display: flex;
  gap: ${(props) => props.$theme.gapMedium};

  ${(props) =>
    props.$mode === ChopLogicTabsMode.Vertical &&
    `
      flex-direction: column;
      border-bottom: none;
      border-right: ${props.$theme.borderLight};
      padding: ${props.$theme.gapMedium} 0;
    `}
`;

export const StyledTabs = styled.div<{ $mode: ChopLogicTabsMode }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $mode }) =>
    $mode === ChopLogicTabsMode.Vertical &&
    `
      flex-direction: row;
    `}
`;
