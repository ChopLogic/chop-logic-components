import styled from 'styled-components';

import { ChopLogicTheme } from '@/types';

export const StyledForm = styled.form<{ $columns: number; $theme: ChopLogicTheme }>`
  display: grid;
  align-items: end;
  gap: ${(props) => props.$theme.gapMedium};
  font-size: ${(props) => props.$theme.fontSizeBase};
  font-family: ${(props) => props.$theme.fontFamilyCore};

  ${({ $columns }) =>
    `
      grid-template-columns: repeat(${$columns}, 1fr);
      grid-template-rows: auto;
    `}
`;

export const StyledFormButtonsContainer = styled.div<{ $columns: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  ${({ $columns }) => `
    grid-column: 1 / ${$columns + 1};
  `}
`;
