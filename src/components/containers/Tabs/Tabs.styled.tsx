import { BORDERS, COLORS, FONTS, SHADOWS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

import { ChopLogicTabsMode } from './types';

export const StyledTabButton = styled.button<{ $selected: boolean; $disabled: boolean; $mode: ChopLogicTabsMode }>`
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  padding: ${UNITS.smallGap} ${UNITS.bigGap};
  min-height: ${UNITS.minElementSize};
  min-width: ${UNITS.minElementSize};
  cursor: pointer;
  font-size: 1rem;
  font-family: ${FONTS.core};
  overflow: hidden;
  border-top-left-radius: ${UNITS.blockBorderRadius};
  border-top-right-radius: ${UNITS.blockBorderRadius};

  &:focus-visible {
    outline: ${BORDERS.focusOutline};
    outline-offset: -4px;
  }

  &:hover,
  &:active {
    text-shadow: ${SHADOWS.text};
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
      border-top: ${BORDERS.lightBlue};
      border-right: ${BORDERS.lightBlue};
      border-left: ${BORDERS.lightBlue};
      background-color: ${COLORS.background};
      top: 1px;
    `}

    ${(props) =>
    props.$mode === 'vertical' &&
    `
      border-bottom-left-radius: ${UNITS.blockBorderRadius};
      border-top-right-radius: 0;
    `}

    ${(props) =>
    props.$mode === 'vertical' &&
    props.$selected &&
    `
      border-top: ${BORDERS.lightBlue};
      border-right: none;
      border-left: ${BORDERS.lightBlue};
      border-bottom: ${BORDERS.lightBlue};
      top: 0px;
      left: 1px;
    `}
`;

export const StyledTabContent = styled.div`
  background-color: ${COLORS.background};
  font-size: 1rem;
  font-family: ${FONTS.core};
  padding: ${UNITS.bigGap};
  flex-grow: 1;
`;

export const StyledTabList = styled.div<{ $mode: ChopLogicTabsMode }>`
  border-bottom: ${BORDERS.lightBlue};
  padding: 0 ${UNITS.mediumGap};
  display: flex;
  gap: ${UNITS.mediumGap};

  ${({ $mode }) =>
    $mode === 'vertical' &&
    `
      flex-direction: column;
      border-bottom: none;
      border-right: ${BORDERS.lightBlue};
      padding: ${UNITS.mediumGap} 0;
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
