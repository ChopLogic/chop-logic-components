import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledInputInnerButton = styled.button<{ $theme: ChopLogicTheme }>`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.$theme.fontSizeBase};
  color: ${(props) => props.$theme.fontColorLight};
  padding: 0;

  &:focus-visible {
    outline: ${(props) => props.$theme.borderOutline};
    outline-offset: -1px;
  }

  &:hover {
    color: ${(props) => props.$theme.fontColorAccent};
  }

  svg {
    cursor: pointer;
    height: ${(props) => props.$theme.iconSize};
    width: ${(props) => props.$theme.iconSize};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;
