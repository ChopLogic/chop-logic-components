import { BORDERS, COLORS, FONTS, SHADOWS, UNITS, Z_INDEXES } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledMultiSelectWrapper = styled.div<{ $disabled: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${UNITS.mediumGap};
  padding: ${UNITS.mediumGap};
  font-family: ${FONTS.core};
  color: ${COLORS.primary};
  box-shadow: ${SHADOWS.box};
  border-top-left-radius: ${UNITS.blockBorderRadius};
  border-top-right-radius: ${UNITS.blockBorderRadius};
  border: ${BORDERS.lightBlue};
  max-width: 100%;
  background-color: ${COLORS.background};
  height: ${UNITS.inputWrapperHeight};

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`;

export const StyledMultiSelectCombobox = styled.button`
    border: none;
    text-align: left;
    padding: 0;
    background: transparent;
    color: ${COLORS.primary};
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${UNITS.mediumGap};
    overflow: hidden;

    svg {
      color: ${COLORS.tertiary};
    }

    &:focus-visible {
      outline: ${BORDERS.focusOutline};
      outline-offset: 2px;
    }
  }
`;

export const StyledMultiSelectPlaceholder = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 0;
`;

export const StyledMultiSelectDropdown = styled.ul<{ $opened: boolean }>`
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.3s linear;
  position: absolute;
  background-color: ${COLORS.background};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: ${Z_INDEXES.dropdown};
  width: 100%;
  top: 72px;
  left: -1px;
  border: ${BORDERS.lightBlue};
  box-shadow: ${SHADOWS.box};
  overflow-y: auto;
  max-height: 180px;

  ${(props) =>
    props.$opened &&
    `
    visibility: visible;
    opacity: 1;
    `}
`;

export const StyledMultiSelectOption = styled.li`
  padding: ${UNITS.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${UNITS.mediumGap};

  &:hover,
  &:active {
    background-color: ${COLORS.shade};
  }

  &:focus-visible {
    outline: ${BORDERS.focusOutline};
    outline-offset: -2px;
  }

  svg {
    color: ${COLORS.secondary};
  }
`;
