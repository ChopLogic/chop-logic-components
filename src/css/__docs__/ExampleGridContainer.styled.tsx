import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const StyledGridTile = styled.div<{ $theme: ChopLogicTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: ${(props) => props.$theme.fontSizeSmall};
  font-family: ${(props) => props.$theme.fontFamilyMonospace};
  color: ${(props) => props.$theme.fontColorBase};
  border-radius: ${(props) => props.$theme.blockBorderRadius};
  padding: ${(props) => props.$theme.gapMedium};

  &:hover {
    background-color: ${(props) => props.$theme.backgroundColorLight};
    cursor: pointer;
  }

  svg {
    font-size: ${(props) => props.$theme.fontSizeHeader};
  }

  span {
    text-align: center;
  }
`;
