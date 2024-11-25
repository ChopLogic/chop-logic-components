import styled from 'styled-components';

export const StyledTextInput = styled.div`
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
      gap: ${(props) => props.theme.smallGap};
      align-items: center;
      min-width: 0;
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
    min-width: 0;

    &:focus-visible {
      outline: none;
    }

    &:placeholder-shown + span {
      display: none !important;
    }
  }
`;
