import { BORDERS, COLORS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledInputInnerButton = styled.button`
  background: ${COLORS.background};
  border: none;
  padding: ${UNITS.smallGap};
  font-size: 1rem;
  color: ${COLORS.tertiary};
  display: flex;
  align-items: center;

  &:focus-visible {
    outline: ${BORDERS.outline};
    outline-offset: -2px;
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
