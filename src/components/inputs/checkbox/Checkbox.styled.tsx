import styled from 'styled-components';

import { ChopLogicTheme } from '@/models';

export const StyledCheckbox = styled.div<{ $disabled: boolean; $checked: boolean; $theme: ChopLogicTheme }>`
  display: flex;
  gap: ${(props) => props.$theme.gapMedium};
  padding: ${(props) => props.$theme.gapMedium} 0;
  position: relative;
  overflow: hidden;

  & svg {
    color: ${(props) => (props.$checked ? props.$theme.fontColorAccent : props.$theme.fontColorLight)};
  }

  & label {
    cursor: pointer;
    gap: ${(props) => props.$theme.gapMedium};
    font-size: ${(props) => props.$theme.fontSizeBase} !important;
    &:hover,
    &:active {
      text-shadow: ${(props) => props.$theme.textShadow};
    }
  }

  ${(props) =>
    props.$disabled &&
    `
      pointer-events: none;
      opacity: 0.5;
    `}

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    top: 4px;
    left: 0;
    margin: 0;

    &:focus-visible + label {
      outline: ${(props) => props.$theme.borderOutline};
      outline-offset: 2px;
    }
  }
`;
