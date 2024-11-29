import styled from 'styled-components';

export const StyledErrorMessage = styled.span<{ $visible: boolean }>`
  font-size: ${(props) => props.theme.smallFontSize};
  font-family: ${(props) => props.theme.coreFontFamily};
  color: ${(props) => props.theme.accentColor};
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
`;
