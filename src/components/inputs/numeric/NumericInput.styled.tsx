import styled from 'styled-components';

export const StyledNumericInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.mediumGap};

  & > div:nth-child(2) {
    display: flex;
    gap: ${(props) => props.theme.smallGap};
    align-items: center;
    border: ${(props) => props.theme.regularBorder};
    border-radius: ${(props) => props.theme.blockBorderRadius};
    padding: ${(props) => props.theme.mediumGap};

    &:has(input:focus) {
      border: ${(props) => props.theme.outlineBorder};
    }

    &:has(input[aria-invalid='true']) {
      border: ${(props) => props.theme.accentBorder};
    }

    &:has(input[disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    & > span:nth-child(2) {
      display: flex;
      gap: 0;
      align-items: center;
    }
  }

  & input {
    font-size: ${(props) => props.theme.baseFontSize};
    padding: 0;
    border: none;
    font-family: ${(props) => props.theme.coreFontFamily};
    color: ${(props) => props.theme.primaryColor};
    display: inline-block;
    background: transparent;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;

    &:focus-visible {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
