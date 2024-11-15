import styled from 'styled-components';
import { ChopLogicTheme } from 'utils/types.ts';

export const StyledLabel = styled.label<{ theme: ChopLogicTheme }>`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.smallFontSize};
  font-family: ${({ theme }) => theme.coreFontFamily};
  gap: ${({ theme }) => theme.smallGap};
  color: ${({ theme }) => theme.primaryColor};

  .chop-logic-label-text {
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .chop-logic-label-abbr {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
  }
`;
