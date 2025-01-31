import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledLinearLoader = styled.span<{ $theme: ChopLogicTheme }>`
  display: block;
  position: relative;
  height: 12px;
  width: 80%;
  border: ${(props) => `1px solid ${props.$theme.fontColorLight}`};
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    width: 40%;
    height: 100%;
    background: ${(props) => props.$theme.fontColorAccent};
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: animloader 2s linear infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
