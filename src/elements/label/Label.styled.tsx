import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledLabel = styled.label<{ $theme: ChopLogicTheme }>`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.$theme.fontSizeSmall};
  font-family: ${(props) => props.$theme.fontFamilyCore};
  gap: ${(props) => props.$theme.gapSmall};
  color: ${(props) => props.$theme.fontColorBase};

  &:hover {
    text-shadow: ${(props) => props.$theme.textShadow};
  }

  & + span {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & abbr {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.$theme.fontColorAccent};
    margin-left: ${(props) => props.$theme.gapSmall};
  }
`;
