import { BORDERS, COLORS, FONTS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledTabButton = styled.button<{ $selected: boolean; $disabled: boolean }>`
  background: transparent;
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

  &:hover {
    background-color: ${COLORS.highlight};
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
        border: ${BORDERS.darkBlue};
    `}
`;
