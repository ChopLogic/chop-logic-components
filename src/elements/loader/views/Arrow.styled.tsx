import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledArrowLoader = styled.span<{ $theme: ChopLogicTheme }>`
  width: 48px;
  height: 48px;
  border: ${(props) => `3px solid ${props.$theme.fontColorLight}`};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: arrowRotation 1s linear infinite;

  &::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    left: 20px;
    top: 31px;
    border: 10px solid transparent;
    border-right-color: ${(props) => props.$theme.fontColorLight};
    transform: rotate(-40deg);
  }

  @keyframes arrowRotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
