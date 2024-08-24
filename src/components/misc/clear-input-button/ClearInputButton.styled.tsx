import { BORDERS, COLORS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledClearButton = styled.button<{ $visible: boolean }>`
  position: absolute;
  bottom: 5px;
  right: 3px;
  background: ${COLORS.background};
  border: none;
  font-size: 1rem;
  color: ${COLORS.secondary};
  padding: ${UNITS.smallGap};
  height: ${UNITS.smallIconSize};
  width: ${UNITS.smallIconSize};
  visibility: hidden;

  ${(props) => props.$visible && `visibility: visible;`}

  &:focus-visible {
    outline: ${BORDERS.focusOutline};
    outline-offset: -4px;
  }

  &:hover {
    color: ${COLORS.accent};
  }

  svg {
    cursor: pointer;
  }
`;
