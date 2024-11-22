import styled from 'styled-components';

export const StyledNumericInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.mediumGap};

  & > div:nth-child(2) {
    display: flex;
    gap: ${(props) => props.theme.smallGap};
    align-items: center;

    & > span:nth-child(2) {
      display: flex;
      gap: 0;
      align-items: center;

      & button {
        padding: 0;
      }
    }
  }

  & input {
    font-size: ${(props) => props.theme.baseFontSize};
    padding: ${(props) => props.theme.mediumGap};
    border: ${(props) => props.theme.regularBorder};
    border-radius: ${(props) => props.theme.blockBorderRadius};
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
      border: ${(props) => props.theme.outlineBorder};
    }

    &[aria-invalid='true'] {
      border: ${(props) => props.theme.accentBorder};
    }

    &[disabled] {
      pointer-events: none;
      opacity: 0.5;
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
