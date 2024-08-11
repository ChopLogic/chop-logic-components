import { fadeInAnimation, fadeOutAnimation } from 'constants/animations';
import { COLORS, FONTS, SHADOWS, UNITS, Z_INDEXES } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledAlertHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    gap: ${UNITS.mediumGap};
    align-items: center;
    margin: 0;
    color: ${COLORS.secondary};
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const StyledAlertWrapper = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  bottom: ${UNITS.bigGap};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${Z_INDEXES.modal};
  ${fadeInAnimation}

  ${(props) => props.$isClosing && fadeOutAnimation}
`;

export const StyledAlertContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${UNITS.mediumGap};
  box-shadow: ${SHADOWS.box};
  font-family: ${FONTS.core};
  width: 95vw;
  padding: ${UNITS.mediumGap};
  border-radius: ${UNITS.blockBorderRadius};
  background: ${COLORS.highlight};
`;
