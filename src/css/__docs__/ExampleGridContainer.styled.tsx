import { ChopLogicTheme } from '@models';
import styled from 'styled-components';

export const StyledGridContainer = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.$columns}, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

export const StyledGridTile = styled.div<{ $theme: ChopLogicTheme; $size: string }>`
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
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};

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
