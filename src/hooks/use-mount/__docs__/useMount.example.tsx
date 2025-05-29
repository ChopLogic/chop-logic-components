import { useState } from 'react';
import styles from '@styles/storybook/Container.module.scss';
import { useMount } from '..';
import { ChopLogicButton } from '@components/atoms';

const UseMountExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useMount(isOpened, 1000);

  return (
    <div>
      <ChopLogicButton text='Toggle component' onClick={() => setIsOpened(!isOpened)} />
      {isMounted && <div className={styles.container}>Component is mounted!</div>}
    </div>
  );
};

export default UseMountExample;
