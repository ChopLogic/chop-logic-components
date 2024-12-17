import styled from 'styled-components';

import { fadeInAnimation } from '@/css';
import { ChopLogicTheme } from '@/types';

export const StyledErrorMessage = styled.span<{ $visible: boolean; $theme: ChopLogicTheme }>`
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  position: absolute;
  right: 0;
  bottom: -40px;
  opacity: 0.8;
  z-index: ${(props) => props.$theme.zIndexPopup};
  background-color: ${(props) => props.$theme.backgroundColorBase};
  border: ${(props) => props.$theme.borderAccent};
  color: ${(props) => props.$theme.fontColorAccent};
  padding: ${(props) => props.$theme.gapMedium};
  font-size: ${(props) => props.$theme.fontSizeSmall};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  box-shadow: ${(props) => props.$theme.boxShadow};
  pointer-events: none;
  white-space: nowrap;
  ${fadeInAnimation}
`;
