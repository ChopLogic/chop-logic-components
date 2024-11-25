import styled from 'styled-components';

export const StyledInputInnerButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.baseFontSize};
  color: ${(props) => props.theme.secondaryColor};
  padding: 0;

  &:focus-visible {
    outline: ${(props) => props.theme.outlineBorder};
    outline-offset: -1px;
  }

  &:hover {
    color: ${(props) => props.theme.primaryColor};
    filter: drop-shadow(${(props) => props.theme.textShadow});
  }

  svg {
    cursor: pointer;
    height: ${(props) => props.theme.iconSize};
    width: ${(props) => props.theme.iconSize};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;
