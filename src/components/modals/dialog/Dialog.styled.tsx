import { fadeInAnimation, fadeOutAnimation } from 'constants/animations';
import { BORDERS, COLORS, FONTS, SCREEN_BREAKPOINTS, SHADOWS, UNITS, Z_INDEXES } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledDialogLayout = styled.div`
  z-index: ${Z_INDEXES.modal};
  background-color: ${COLORS.background};
  box-shadow: ${SHADOWS.box};
  font-family: ${FONTS.core};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${UNITS.blockBorderRadius};
  border-top-right-radius: ${UNITS.blockBorderRadius};
  ${fadeInAnimation}

  @media ${SCREEN_BREAKPOINTS.landscapeTablets} {
    width: fit-content;
    height: fit-content;
    position: relative;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    border-bottom-left-radius: ${UNITS.blockBorderRadius};
    border-bottom-right-radius: ${UNITS.blockBorderRadius};

    header {
      font-size: 2rem;
    }
  }
`;

export const StyledDialogBackground = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.transparentBackground};
  ${fadeInAnimation}

  ${(props) => props.$isClosing && fadeOutAnimation}
`;

export const StyledDialogHeader = styled.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${UNITS.bigGap};
  padding: ${UNITS.bigGap};
  border-bottom: ${BORDERS.lightBlue};
  color: ${COLORS.secondary};
`;

export const StyledDialogContent = styled.div`
  padding: ${UNITS.bigGap};
  font-size: 1rem;
`;
