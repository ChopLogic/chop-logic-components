import styled from 'styled-components';

import { fadeInAnimation, fadeOutAnimation, SCREEN_BREAKPOINTS } from '@/css';
import { ChopLogicTheme } from '@/models';

export const StyledDialogLayout = styled.div<{ $theme: ChopLogicTheme }>`
  z-index: ${(props) => props.$theme.zIndexModal};
  background-color: ${(props) => props.$theme.backgroundColorBase};
  box-shadow: ${(props) => props.$theme.boxShadow};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  color: ${(props) => props.$theme.fontColorBase};
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top-left-radius: ${(props) => props.$theme.blockBorderRadius};
  border-top-right-radius: ${(props) => props.$theme.blockBorderRadius};
  ${fadeInAnimation}

  @media ${SCREEN_BREAKPOINTS.landscapeTablets} {
    width: fit-content;
    height: fit-content;
    position: relative;
    min-width: 40%;
    max-width: 90%;
    max-height: 90%;
    border-bottom-left-radius: ${(props) => props.$theme.blockBorderRadius};
    border-bottom-right-radius: ${(props) => props.$theme.blockBorderRadius};

    header {
      font-size: ${(props) => props.$theme.fontSizeHeader};
    }
  }
`;

export const StyledDialogBackground = styled.div<{ $isClosing: boolean; $theme: ChopLogicTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$theme.backgroundColorTransparent};
  ${fadeInAnimation}

  ${(props) => props.$isClosing && fadeOutAnimation}
`;

export const StyledDialogHeader = styled.header<{ $theme: ChopLogicTheme }>`
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.$theme.gapBig};
  padding: ${(props) => props.$theme.gapBig};
  border-bottom: ${(props) => props.$theme.borderBase};
  color: ${(props) => props.$theme.fontColorBase};
`;

export const StyledDialogContent = styled.div<{ $theme: ChopLogicTheme }>`
  padding: ${(props) => props.$theme.gapBig};
  font-size: ${(props) => props.$theme.fontSizeBase};
`;
