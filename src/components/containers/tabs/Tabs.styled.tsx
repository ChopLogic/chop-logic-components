import styled from 'styled-components';

import { ChopLogicTabsMode, ChopLogicTheme } from '@/types';

export const StyledTabButton = styled.button<{ $selected: boolean; $disabled: boolean; $mode: ChopLogicTabsMode; $theme: ChopLogicTheme }>`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  padding: ${(props) => props.$theme.mediumGap};
  cursor: pointer;
  font-size: ${(props) => props.$theme.baseFontSize};
  font-family: ${(props) => props.$theme.coreFontFamily};
  color: ${(props) => props.$theme.primaryColor};
  overflow: hidden;
  border-top-left-radius: ${(props) => props.$theme.blockBorderRadius};
  border-top-right-radius: ${(props) => props.$theme.blockBorderRadius};

  &:focus-visible {
    outline: ${(props) => props.$theme.outlineBorder};
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
      border-top: ${props.$theme.regularBorder};
      border-right: ${props.$theme.regularBorder};
      border-left: ${props.$theme.regularBorder};
      background-color: ${props.$theme.backgroundColor};
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
      border-top: ${props.$theme.regularBorder};
      border-right: none;
      border-left: ${props.$theme.regularBorder};
      border-bottom: ${props.$theme.regularBorder};
      top: 0px;
      left: 1px;
    `}
`;

export const StyledTabContent = styled.div<{ $theme: ChopLogicTheme }>`
  background-color: ${(props) => props.$theme.backgroundColor};
  color: ${(props) => props.$theme.primaryColor};
  font-size: ${(props) => props.$theme.baseFontSize};
  font-family: ${(props) => props.$theme.coreFontFamily};
  padding: ${(props) => props.$theme.bigGap};
  flex-grow: 1;
`;

export const StyledTabList = styled.div<{ $mode: ChopLogicTabsMode; $theme: ChopLogicTheme }>`
  border-bottom: ${(props) => props.$theme.regularBorder};
  padding: 0 ${(props) => props.$theme.mediumGap};
  display: flex;
  gap: ${(props) => props.$theme.mediumGap};

  ${(props) =>
    props.$mode === 'vertical' &&
    `
      flex-direction: column;
      border-bottom: none;
      border-right: ${props.$theme.regularBorder};
      padding: ${props.$theme.mediumGap} 0;
    `}
`;

export const StyledTabsContainer = styled.div<{ $mode: ChopLogicTabsMode }>`
  display: flex;
  flex-direction: column;

  ${({ $mode }) =>
    $mode === 'vertical' &&
    `
      flex-direction: row;
    `}
`;
