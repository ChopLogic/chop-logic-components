import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledRotationLoader = styled.span<{ $theme: ChopLogicTheme }>`
  width: 64px;
  height: 64px;
  position: relative;
  background-image: ${(
    props,
  ) => `linear-gradient(${props.$theme.fontColorLight} 16px, transparent 0), linear-gradient(${props.$theme.fontColorAccent} 16px, transparent 0),
      linear-gradient(${props.$theme.fontColorAccent} 16px, transparent 0), linear-gradient(${props.$theme.fontColorLight} 16px, transparent 0)`};
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position:
    left top,
    left bottom,
    right top,
    right bottom;
  animation: squaresRotateAnimation 1s linear infinite;

  @keyframes squaresRotateAnimation {
    0% {
      width: 64px;
      height: 64px;
      transform: rotate(0deg);
    }
    50% {
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
    }
    100% {
      width: 64px;
      height: 64px;
      transform: rotate(360deg);
    }
  }
`;
