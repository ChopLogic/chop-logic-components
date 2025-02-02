import React from 'react';
import { StyledGridContainer, StyledGridTile } from '@css/__docs__/ExampleGridContainer.styled.tsx';
import ChopLogicLoader from '@elements/loader/Loader.tsx';
import { ChopLogicLoaderView } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicLoaderProps } from '@models';

const LoaderExample: React.FC<ChopLogicLoaderProps> = () => {
  const loaders = Object.values(ChopLogicLoaderView);
  const theme = useChopLogicTheme();

  return (
    <StyledGridContainer $columns={3}>
      {loaders.map((view) => (
        <StyledGridTile key={view} $theme={theme} $size='8rem'>
          <ChopLogicLoader view={view} />
          <span>{view}</span>
        </StyledGridTile>
      ))}
    </StyledGridContainer>
  );
};

export default LoaderExample;
