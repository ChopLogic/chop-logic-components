import { Button } from '@components/atoms';
import { ButtonView } from '@enums';
import styles from '@styles/storybook/Container.module.scss';
import { useState } from 'react';

import { useIsMounted } from '../use-is-mounted';

export const UseIsMountedExample = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMounted = useIsMounted(isOpened, 1000);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        text="Toggle component"
        onClick={() => setIsOpened(!isOpened)}
        view={ButtonView.Secondary}
      />
      {isMounted && (
        <div className={styles.container}>
          New component is mounted! After the second click on the Toggle button it will be unmounted
          in 1 second.
        </div>
      )}
    </div>
  );
};
