import { COLORS, FONTS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';
import { ChopLogicTheme } from 'utils/types.ts';

export const StyledTextInputContainer = styled.div<{ theme?: ChopLogicTheme }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.mediumGap};
`;

export const StyledTextInputWrapper = styled.div<{ $disabled: boolean; $invalid: boolean; theme?: ChopLogicTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${(props) => props.theme.smallGap};
  padding: ${(props) => `${props.theme.mediumGap} ${props.theme.mediumGap} ${props.theme.smallGap} ${props.theme.mediumGap}`};
  font-family: ${(props) => props.theme.coreFontFamily};
  color: ${(props) => props.theme.primaryColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-top-left-radius: ${(props) => props.theme.blockBorderRadius};
  border-top-right-radius: ${(props) => props.theme.blockBorderRadius};
  border: ${(props) => props.theme.regularBorder};
  background-color: ${(props) => props.theme.backgroundColor};

  &:has(input:focus) {
    outline: ${(props) => props.theme.outlineBorder};
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
        border: ${props.theme.accentBorder};
        &:has(input:focus) {
            outline: ${props.theme.accentBorder};
            outline-offset: -3px;
        }
    `}
`;

export const StyledTextInput = styled.input`
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
  align-items: center;
  justify-content: center;
  min-width: 0;
`;
