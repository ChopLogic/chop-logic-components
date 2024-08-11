import { fadeInAnimation } from 'constants/animations';
import { COLORS, SHADOWS, UNITS, Z_INDEXES } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${Z_INDEXES.tooltip};
  background-color: ${COLORS.secondary};
  color: ${COLORS.background};
  padding: ${UNITS.smallGap} ${UNITS.mediumGap};
  font-size: 0.8rem;
  border-radius: ${UNITS.blockBorderRadius};
  box-shadow: ${SHADOWS.box};
  pointer-events: none;
  white-space: nowrap;
  ${fadeInAnimation}
`;
