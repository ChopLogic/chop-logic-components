import styled from 'styled-components';

export const StyledInputInnerButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.baseFontSize};
  padding: ${(props) => props.theme.smallGap};
  color: ${(props) => props.theme.secondaryColor};

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
`;
