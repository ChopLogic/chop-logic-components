import { useState } from 'react';
import styles from '@styles/storybook/Container.module.scss';
import { ChopLogicButton } from '@atoms';
import { useIsMounted } from '../use-is-mounted';

export const UseIsMountedExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useIsMounted(isOpened, 1000);

  return (
    <div>
      <ChopLogicButton text='Toggle component' onClick={() => setIsOpened(!isOpened)} />
      {isMounted && <div className={styles.container}>Component is mounted!</div>}
    </div>
  );
};
