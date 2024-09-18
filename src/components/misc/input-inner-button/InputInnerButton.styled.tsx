import { BORDERS, COLORS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledInputInnerButton = styled.button`
  position: absolute;
  bottom: 2px;
  right: 2px;
  padding: 2px;
  background: ${COLORS.background};
  border: none;
  font-size: 1rem;
  color: ${COLORS.tertiary};

  &:focus-visible {
    outline: ${BORDERS.focusOutline};
    outline-offset: -4px;
  }

  &:hover {
    color: ${COLORS.secondary};
  }

  svg {
    cursor: pointer;
    height: ${UNITS.smallIconSize};
    width: ${UNITS.smallIconSize};
  }
`;
