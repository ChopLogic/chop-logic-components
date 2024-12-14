import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledErrorMessage = styled.span<{ $visible: boolean; $theme: ChopLogicTheme }>`
  font-size: ${(props) => props.$theme.fontSizeSmall};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorAccent};
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
`;
