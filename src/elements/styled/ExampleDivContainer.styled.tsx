import styled from 'styled-components';

import { ChopLogicTheme } from '@/models';

export const ExampleDivContainer = styled.div<{ $theme: ChopLogicTheme }>`
  padding: ${(props) => props.$theme.gapBig};
  cursor: pointer;
  font-size: ${(props) => props.$theme.fontSizeBase};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  border: ${(props) => props.$theme.borderLight};
  display: flex;
  gap: ${(props) => props.$theme.gapMedium};
`;
