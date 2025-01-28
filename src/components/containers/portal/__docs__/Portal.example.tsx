import React from 'react';
import { ChopLogicPortal } from '@components';
import { useChopLogicTheme } from '@hooks';

import { ExampleDivContainer } from '../../../../__docs__/styles/ExampleDivContainer.styled.tsx';

const PortalExample: React.FC<React.PropsWithChildren> = (props) => {
  const theme = useChopLogicTheme();

  return (
    <ChopLogicPortal>
      <ExampleDivContainer $theme={theme}>{props.children}</ExampleDivContainer>
    </ChopLogicPortal>
  );
};

export default PortalExample;
