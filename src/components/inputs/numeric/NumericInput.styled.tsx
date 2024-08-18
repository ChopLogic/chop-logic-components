import { BORDERS, COLORS, FONTS, SHADOWS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledNumericInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${UNITS.mediumGap};
`;

export const StyledNumericInputWrapper = styled.div<{ $disabled: boolean; $invalid: boolean }>`
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
  background-color: ${COLORS.background};

  &:has(input:focus) {
    outline: ${BORDERS.lightBlue};
    outline-offset: -3px;
  }

  ${(props) =>
    props.$disabled &&
    `
      filter: grayscale(100%);
      opacity: 0.8;
      pointer-events: none;

      input::placeholder {
        color: transparent;
      }
    `}

  ${(props) =>
    props.$invalid &&
    `
        border: ${BORDERS.accent};
        &:has(input:focus) {
            outline: ${BORDERS.accent};
            outline-offset: -3px;
        }
    `}
`;

export const StyledNumericInput = styled.input`
  outline: 0;
  border: none;
  font-size: 1rem;
  padding: 0;
  background: transparent;
  font-family: ${FONTS.core};
  color: ${COLORS.primary};
`;
