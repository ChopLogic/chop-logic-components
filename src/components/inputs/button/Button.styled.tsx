import { BORDERS, COLORS, FONTS, GRADIENTS, SHADOWS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

import { ChopLogicButtonView } from './types';

const primaryStyles = `
    border-radius: ${UNITS.blockBorderRadius};
    color: ${COLORS.background};
    box-shadow: ${SHADOWS.box};
    filter: brightness(100%);
    transition: 0.3s;
    background: ${GRADIENTS.primary};

    &:hover,
    &:active {
    filter: brightness(130%);
    }
`;

const dangerStyles = `
    border-radius: ${UNITS.blockBorderRadius};
    color: ${COLORS.background};
    box-shadow: ${SHADOWS.box};
    filter: brightness(100%);
    transition: 0.3s;
    background: ${GRADIENTS.accent};

    &:hover,
    &:active {
      filter: brightness(130%);
    }
`;

const secondaryStyles = `
    background: none;
    color: ${COLORS.primary};
    text-shadow: none;
    transition: 0.3s;

    & .cl-button__text {
      text-decoration: underline;
    }

    &:hover,
    &:active {
      text-shadow: ${SHADOWS.text};
    }

    &.cl-button_disabled {
      opacity: 0.6;
    }
`;

const iconStyles = `
    gap: 0;
    background: transparent;
    font-weight: normal;
    font-size: 1.4rem;
    border-radius: ${UNITS.blockBorderRadius};
    color: ${COLORS.secondary};

    &:hover,
    &:active {
      background-color: ${COLORS.shade};
    }
`;

export const StyledButton = styled.button<{ $view: ChopLogicButtonView; $disabled: boolean; $extended: boolean }>`
  min-height: ${UNITS.minElementSize};
  min-width: ${UNITS.minElementSize};
  border: none;
  cursor: pointer;
  padding: 0 ${UNITS.mediumGap};
  font-size: 1rem;
  font-family: ${FONTS.core};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${UNITS.smallGap};
  overflow: hidden;

  &:focus-visible {
    outline: ${BORDERS.outline};
    outline-offset: 2px;
  }

  ${(props) => {
    switch (props.$view) {
      case 'primary':
        return primaryStyles;
      case 'secondary':
        return secondaryStyles;
      case 'danger':
        return dangerStyles;
      case 'icon':
        return iconStyles;
      default:
        return '';
    }
  }}

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.9;
    `}

    ${(props) => props.$extended && `width: 100%;`}
`;

export const StyledButtonText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;
