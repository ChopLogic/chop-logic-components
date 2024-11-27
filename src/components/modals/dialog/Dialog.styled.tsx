import { fadeInAnimation, fadeOutAnimation } from 'constants/animations';
import { SCREEN_BREAKPOINTS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledDialogLayout = styled.div`
  z-index: ${(props) => props.theme.modalIndex};
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  font-family: ${(props) => props.theme.coreFontFamily};
  color: ${(props) => props.theme.primaryColor};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${(props) => props.theme.blockBorderRadius};
  border-top-right-radius: ${(props) => props.theme.blockBorderRadius};
  ${fadeInAnimation}

  @media ${SCREEN_BREAKPOINTS.landscapeTablets} {
    width: fit-content;
    height: fit-content;
    position: relative;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    border-bottom-left-radius: ${(props) => props.theme.blockBorderRadius};
    border-bottom-right-radius: ${(props) => props.theme.blockBorderRadius};

    header {
      font-size: ${(props) => props.theme.headerFontSize};
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
  background-color: ${(props) => props.theme.transparentBackgroundColor};
  ${fadeInAnimation}

  ${(props) => props.$isClosing && fadeOutAnimation}
`;

export const StyledDialogHeader = styled.header`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.bigGap};
  padding: ${(props) => props.theme.bigGap};
  border-bottom: ${(props) => props.theme.regularBorder};
  color: ${(props) => props.theme.secondaryColor};
`;

export const StyledDialogContent = styled.div`
  padding: ${(props) => props.theme.bigGap};
  font-size: ${(props) => props.theme.baseFontSize};
`;
