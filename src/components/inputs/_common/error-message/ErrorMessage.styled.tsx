import styled from 'styled-components';
import { ChopLogicTheme } from 'utils/types.ts';

export const StyledErrorMessage = styled.span<{ $visible: boolean; theme: ChopLogicTheme }>`
  font-size: ${({ theme }) => theme.smallFontSize};
  font-family: ${({ theme }) => theme.coreFontFamily};
  color: ${({ theme }) => theme.accentColor};
  display: ${($visible) => ($visible ? 'block' : 'none')};
`;
