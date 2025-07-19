import styles from '@styles/storybook/Container.module.scss';
import { useRef } from 'react';

import { useContainerDimensions } from '../use-container-dimensions.ts';

export const UseContainerDimensionsExample = () => {
  const ref = useRef(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref} className={styles.container}>
      Width: {width}px, Height: {height}px
    </div>
  );
};
