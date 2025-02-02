import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledFillerLoader = styled.span<{ $theme: ChopLogicTheme }>`
  width: 48px;
  height: 48px;
  border: ${(props) => `10px solid ${props.$theme.fontColorLight}`};
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    inset: -10px;
    border-radius: 50%;
    border: ${(props) => `10px solid ${props.$theme.fontColorAccent}`};
    animation: prixClipFix 2s infinite linear;
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;
