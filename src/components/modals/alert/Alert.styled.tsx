import styled from 'styled-components';

import { fadeInAnimation, fadeOutAnimation } from '@/css';
import { ChopLogicTheme } from '@/types';

export const StyledAlertHeader = styled.header<{ $theme: ChopLogicTheme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    gap: ${(props) => props.$theme.gapMedium};
    align-items: center;
    margin: 0;
    color: ${(props) => props.$theme.fontColorLight};
  }

  button {
    color: ${(props) => props.$theme.fontColorBase};
    background: transparent;

    &:hover {
      filter: drop-shadow(${(props) => props.$theme.textShadow});
      background-color: ${(props) => props.$theme.fontColorBase};
      color: ${(props) => props.$theme.backgroundColorBase};
    }
  }
`;

export const StyledAlertWrapper = styled.div<{ $isClosing: boolean; $theme: ChopLogicTheme }>`
  position: fixed;
  bottom: ${(props) => props.$theme.gapBig};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${(props) => props.$theme.zIndexPopup};
  ${fadeInAnimation}

  ${(props) => props.$isClosing && fadeOutAnimation}
`;

export const StyledAlertContent = styled.div<{ $theme: ChopLogicTheme }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$theme.gapMedium};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  background: ${(props) => props.$theme.backgroundColorBase};
  color: ${(props) => props.$theme.fontColorBase};
  width: 90vw;
  padding: ${(props) => props.$theme.gapMedium};
  box-shadow: ${(props) => props.$theme.boxShadow};
  border: ${(props) => props.$theme.borderBase};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
`;
