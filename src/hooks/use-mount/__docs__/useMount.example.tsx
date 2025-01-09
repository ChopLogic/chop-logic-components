import { useState } from 'react';
import { ExampleDivContainer } from '@elements/styled/ExampleDivContainer.styled';
import { useChopLogicTheme } from '@hooks';

import { useMount } from '..';

const UseMountExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useMount(isOpened, 1000);
  const theme = useChopLogicTheme();

  return (
    <div>
      <button onClick={() => setIsOpened(!isOpened)}>Toggle Component</button>
      {isMounted && <ExampleDivContainer $theme={theme}>Component is mounted!</ExampleDivContainer>}
    </div>
  );
};

export default UseMountExample;
