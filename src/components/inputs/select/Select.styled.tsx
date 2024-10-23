import { BORDERS, COLORS, FONTS, SHADOWS, UNITS, Z_INDEXES } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledSelectWrapper = styled.div<{ $disabled: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${UNITS.smallGap};
  padding: ${UNITS.mediumGap} ${UNITS.mediumGap} ${UNITS.smallGap} ${UNITS.mediumGap};
  font-family: ${FONTS.core};
  color: ${COLORS.primary};
  box-shadow: ${SHADOWS.box};
  border-top-left-radius: ${UNITS.blockBorderRadius};
  border-top-right-radius: ${UNITS.blockBorderRadius};
  border: ${BORDERS.thin};
  max-width: 100%;
  background-color: ${COLORS.background};

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.6;
    `}
`;

export const StyledSelectCombobox = styled.button`
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
    height: ${UNITS.fieldWrapperHeight};

    svg {
      color: ${COLORS.tertiary};
      &:hover {
        color: ${COLORS.secondary};
      }
    }


    &:focus-visible {
      outline: ${BORDERS.outline};
      outline-offset: 2px;
    }
  }
`;

export const StyledSelectPlaceholder = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS.primary};
  padding: 2px 0;
  opacity: 0.6;
`;

export const StyledSelectLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${COLORS.primary};
  padding: 2px 0;
`;

export const StyledSelectDropdown = styled.ul<{ $opened: boolean }>`
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
  top: 78px;
  left: -1px;
  border: ${BORDERS.thin};
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

export const StyledSelectOption = styled.li`
  padding: ${UNITS.mediumGap};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${UNITS.mediumGap};

  &:hover,
  &:active {
    background-color: ${COLORS.shade};
  }

  &:focus-visible {
    outline: ${BORDERS.outline};
    outline-offset: -2px;
  }

  svg {
    color: ${COLORS.secondary};
  }
`;
