import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledForm = styled.form<{ $columns: number; $theme: ChopLogicTheme }>`
  font-size: ${(props) => props.$theme.baseFontSize};
  font-family: ${(props) => props.$theme.coreFontFamily};
  display: grid;
  gap: ${(props) => props.$theme.mediumGap};
  align-items: end;

  ${({ $columns }) =>
    `
      grid-template-columns: repeat(${$columns}, 1fr);
      grid-template-rows: auto;
    `}
`;

export const StyledFormButtonContainer = styled.div<{ $columns: number; $theme: ChopLogicTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${(props) => props.$theme.bigGap};

  ${({ $columns }) => `
    grid-column: 1 / ${$columns + 1};
  `}
`;
