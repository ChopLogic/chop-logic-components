import styled from 'styled-components';

import { fadeInAnimation } from '@/css';

export const StyledTooltip = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${(props) => props.theme.tooltipIndex};
  background-color: ${(props) => props.theme.backgroundColor};
  border: ${(props) => props.theme.regularBorder};
  color: ${(props) => props.theme.primaryColor};
  padding: ${(props) => props.theme.mediumGap};
  font-size: ${(props) => props.theme.smallFontSize};
  font-family: ${(props) => props.theme.coreFontFamily};
  border-radius: ${(props) => props.theme.blockBorderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  pointer-events: none;
  white-space: nowrap;
  ${fadeInAnimation}
`;
