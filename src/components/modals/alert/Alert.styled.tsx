import styled from 'styled-components';

import { fadeInAnimation, fadeOutAnimation } from '@/css';

export const StyledAlertHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    display: flex;
    gap: ${(props) => props.theme.mediumGap};
    align-items: center;
    margin: 0;
    color: ${(props) => props.theme.secondaryColor};
  }

  button {
    color: ${(props) => props.theme.primaryColor};
    background: transparent;

    &:hover {
      filter: drop-shadow(${(props) => props.theme.textShadow});
      background-color: ${(props) => props.theme.secondaryColor};
      color: ${(props) => props.theme.backgroundColor};
    }
  }
`;

export const StyledAlertWrapper = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  bottom: ${(props) => props.theme.bigGap};
  left: 50%;
  transform: translateX(-50%);
  z-index: ${(props) => props.theme.modalIndex};
  ${fadeInAnimation}

  ${(props) => props.$isClosing && fadeOutAnimation}
`;

export const StyledAlertContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.mediumGap};
  font-family: ${(props) => props.theme.coreFontFamily};
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.primaryColor};
  width: 90vw;
  padding: ${(props) => props.theme.mediumGap};
  box-shadow: ${(props) => props.theme.boxShadow};
  border: ${(props) => props.theme.regularBorder};
  border-radius: ${(props) => props.theme.blockBorderRadius};
`;
