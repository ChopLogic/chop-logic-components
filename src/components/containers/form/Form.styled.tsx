import { FONTS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledForm = styled.form<{ $columns: number }>`
  font-size: 1rem;
  font-family: ${FONTS.core};
  display: grid;
  gap: ${UNITS.bigGap};

  ${({ $columns }) =>
    `
      grid-template-columns: repeat(${$columns}, 1fr);
      grid-template-rows: auto;
    `}
`;

export const StyledFormButtonContainer = styled.div<{ $columns: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ $columns }) => `
    grid-column: 1 / ${$columns + 1};
  `}
`;
