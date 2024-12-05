import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledErrorMessage = styled.span<{ $visible: boolean; $theme: ChopLogicTheme }>`
  font-size: ${(props) => props.$theme.smallFontSize};
  font-family: ${(props) => props.$theme.coreFontFamily};
  color: ${(props) => props.$theme.accentColor};
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
`;
