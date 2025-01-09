import React from 'react';
import { ChopLogicIcon } from '@elements';
import { ChopLogicIconName } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicIconProps, ChopLogicTheme } from '@models';
import styled from 'styled-components';

const StyledIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;

const StyledIconTile = styled.div<{ $theme: ChopLogicTheme }>`
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

const IconExample: React.FC<ChopLogicIconProps> = () => {
  const iconNames = Object.values(ChopLogicIconName);
  const theme = useChopLogicTheme();

  return (
    <StyledIconsContainer>
      {iconNames.map((name) => (
        <StyledIconTile key={name} $theme={theme}>
          <ChopLogicIcon name={name} />
          <span>{name}</span>
        </StyledIconTile>
      ))}
    </StyledIconsContainer>
  );
};

export default IconExample;
