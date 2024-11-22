import styled from 'styled-components';

export const StyledCheckbox = styled.div<{ $disabled: boolean }>`
  display: flex;
  gap: ${(props) => props.theme.smallGap};
  padding: ${(props) => props.theme.smallGap} 0;
  position: relative;
  overflow: hidden;

  & svg {
    color: ${(props) => props.theme.secondaryColor};
  }

  & label {
    cursor: pointer;
    gap: ${(props) => props.theme.smallGap};
    font-size: ${(props) => props.theme.baseFontSize} !important;
    &:hover,
    &:active {
      text-shadow: ${(props) => props.theme.textShadow};
    }
  }

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    top: 4px;
    left: 0;
    margin: 0;

    &:focus-visible + label {
      outline: ${(props) => props.theme.outlineBorder};
      outline-offset: 2px;
    }
  }
`;

// ${(props) =>
//   props.$disabled &&
//   `
//       pointer-events: none;
//       filter: grayscale(80%);
//       opacity: 0.6;
//     `}
