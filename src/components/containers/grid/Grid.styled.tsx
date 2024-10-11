import { BORDERS, COLORS, FONTS, SHADOWS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledGrid = styled.table`
  border-collapse: collapse;
  box-shadow: ${SHADOWS.box};
`;

export const StyledGridHeader = styled.thead`
  font-family: ${FONTS.core};
  color: ${COLORS.primary};
  font-size: 1rem;
`;

export const StyledGridBody = styled.tbody`
  font-family: ${FONTS.core};
  color: ${COLORS.primary};
`;

export const StyledGridHeaderCell = styled.th`
  padding: ${UNITS.mediumGap};
  text-align: left;
`;

export const StyledGridHeaderRow = styled.tr`
  background-color: ${COLORS.secondary};
  color: ${COLORS.background};

  svg {
    color: ${COLORS.background} !important;
  }
`;

export const StyledGridCell = styled.td`
  padding: ${UNITS.mediumGap};
`;

export const StyledGridCaption = styled.caption`
  font-family: ${FONTS.core};
  color: ${COLORS.primary};
  padding: ${UNITS.mediumGap};
  font-weight: bold;
`;

export const StyledGridRow = styled.tr<{ $selected: boolean }>`
  border-bottom: ${BORDERS.lightBlue};

  ${(props) =>
    props.$selected &&
    `
      background-color: ${COLORS.highlight};
    `}
`;

export const StyledGridColumn = styled.col<{ $isFirst: boolean }>`
  border-right: ${BORDERS.lightBlue};

  ${(props) =>
    props.$isFirst &&
    `
      border-left: ${BORDERS.lightBlue};
    `}
`;

export const StyledGridCheckboxWrapper = styled.div<{ $disabled: boolean }>`
  display: flex;
  gap: ${UNITS.smallGap};
  padding: ${UNITS.smallGap} 0;
  position: relative;
  overflow: hidden;

  svg {
    color: ${COLORS.secondary};
  }

  label {
    cursor: pointer;
    gap: ${UNITS.smallGap};
    font-size: 1rem !important;
    &:hover,
    &:active {
      text-shadow: ${SHADOWS.text};
    }
  }

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`;

export const StyledGridCheckboxInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 4px;
  left: 0;
  margin: 0;

  &:focus-visible + label {
    outline: ${BORDERS.focusOutline};
    outline-offset: 2px;
  }
`;
