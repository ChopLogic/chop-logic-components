import styled from 'styled-components';

import { fadeInAnimation } from '@/css';
import { ChopLogicTheme } from '@/types';

export const StyledTooltip = styled.div<{ $theme: ChopLogicTheme }>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${(props) => props.$theme.zIndexPopup};
  background-color: ${(props) => props.$theme.backgroundColorBase};
  border: ${(props) => props.$theme.borderLight};
  color: ${(props) => props.$theme.fontColorBase};
  padding: ${(props) => props.$theme.gapMedium};
  font-size: ${(props) => props.$theme.fontSizeSmall};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  box-shadow: ${(props) => props.$theme.boxShadow};
  pointer-events: none;
  white-space: nowrap;

  ${fadeInAnimation}
`;
