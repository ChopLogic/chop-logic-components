import React from 'react';
import { ChopLogicPortal } from '@components';
import { ExampleDivContainer } from '@css/__docs__/ExampleDivContainer.styled.tsx';
import { useChopLogicTheme } from '@hooks';

const PortalExample: React.FC<React.PropsWithChildren> = (props) => {
  const theme = useChopLogicTheme();

  return (
    <ChopLogicPortal>
      <ExampleDivContainer $theme={theme}>{props.children}</ExampleDivContainer>
    </ChopLogicPortal>
  );
};

export default PortalExample;
