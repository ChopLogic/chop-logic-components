import React from 'react';
import { StyledGridContainer, StyledGridTile } from '@css/__docs__/ExampleGridContainer.styled.tsx';
import { ChopLogicIcon } from '@elements';
import { ChopLogicIconName } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicIconProps } from '@models';

const IconExample: React.FC<ChopLogicIconProps> = () => {
  const iconNames = Object.values(ChopLogicIconName);
  const theme = useChopLogicTheme();

  return (
    <StyledGridContainer>
      {iconNames.map((name) => (
        <StyledGridTile key={name} $theme={theme}>
          <ChopLogicIcon name={name} />
          <span>{name}</span>
        </StyledGridTile>
      ))}
    </StyledGridContainer>
  );
};

export default IconExample;
