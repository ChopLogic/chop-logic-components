import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledCircleLoader = styled.span<{ $theme: ChopLogicTheme }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: circleRotateAnimation 1s linear infinite;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: ${(props) => `5px solid ${props.$theme.fontColorLight}`};
    animation: circleClipAnimation 2s linear infinite;
  }

  @keyframes circleRotateAnimation {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes circleClipAnimation {
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
