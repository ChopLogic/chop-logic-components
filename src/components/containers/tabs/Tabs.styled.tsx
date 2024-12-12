import styled from 'styled-components';

import { ChopLogicTabsMode, ChopLogicTheme } from '@/types';

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
    text-decoration: underline;
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
      border-top: ${props.$theme.borderBase};
      border-right: ${props.$theme.borderBase};
      border-left: ${props.$theme.borderBase};
      background-color: ${props.$theme.backgroundColorBase};
      top: 1px;
    `}

    ${(props) =>
    props.$mode === 'vertical' &&
    `
      border-bottom-left-radius: ${props.$theme.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${(props) =>
    props.$mode === 'vertical' &&
    props.$selected &&
    `
      border-top: ${props.$theme.borderBase};
      border-right: none;
      border-left: ${props.$theme.borderBase};
      border-bottom: ${props.$theme.borderBase};
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
  border-bottom: ${(props) => props.$theme.borderBase};
  padding: 0 ${(props) => props.$theme.gapMedium};
  display: flex;
  gap: ${(props) => props.$theme.gapMedium};

  ${(props) =>
    props.$mode === 'vertical' &&
    `
      flex-direction: column;
      border-bottom: none;
      border-right: ${props.$theme.borderBase};
      padding: ${props.$theme.gapMedium} 0;
    `}
`;

export const StyledTabs = styled.div<{ $mode: ChopLogicTabsMode }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $mode }) =>
    $mode === 'vertical' &&
    `
      flex-direction: row;
    `}
`;
