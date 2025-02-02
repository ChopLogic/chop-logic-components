import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledPulseLoader = styled.span<{ $theme: ChopLogicTheme }>`
  width: 48px;
  height: 48px;
  border: ${(props) => `5px solid ${props.$theme.fontColorLight}`};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: ${(props) => `5px solid ${props.$theme.fontColorLight}`};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: scaleUpAnimation 1s linear infinite;
  }

  @keyframes scaleUpAnimation {
    0% {
      transform: translate(-50%, -50%) scale(0);
    }
    60%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes pulse {
    0%,
    60%,
    100% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.2);
    }
  }
`;
