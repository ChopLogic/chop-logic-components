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
  gap: ${UNITS.smallGap};
  padding: ${UNITS.mediumGap} ${UNITS.mediumGap} ${UNITS.smallGap} ${UNITS.mediumGap};
  font-family: ${FONTS.core};
  color: ${COLORS.primary};
  box-shadow: ${SHADOWS.box};
  border-top-left-radius: ${UNITS.blockBorderRadius};
  border-top-right-radius: ${UNITS.blockBorderRadius};
  border: ${BORDERS.thin};
  background-color: ${COLORS.background};

  &:has(input:focus) {
    outline: ${BORDERS.thin};
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
  flex-grow: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;

  &:placeholder-shown + span {
    visibility: hidden;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const StyledFieldWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${UNITS.smallGap};
  height: ${UNITS.fieldWrapperHeight};
`;

export const StyledButtonsWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 0;

  button {
    padding: 0;
  }
`;
