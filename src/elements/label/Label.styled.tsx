import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledLabel = styled.label<{ $theme: ChopLogicTheme }>`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.$theme.smallFontSize};
  font-family: ${(props) => props.$theme.coreFontFamily};
  gap: ${(props) => props.$theme.smallGap};
  color: ${(props) => props.$theme.primaryColor};

  & + span {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & abbr {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.$theme.accentColor};
  }
`;
