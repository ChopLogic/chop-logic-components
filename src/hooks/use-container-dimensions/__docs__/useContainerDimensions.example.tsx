import { useRef } from 'react';
import { useContainerDimensions } from '@hooks';
import styles from '@styles/storybook/Container.module.scss';

const UseContainerDimensionsExample = () => {
  const ref = useRef(null);
  const { width, height } = useContainerDimensions({ ref, isVisible: true });

  return (
    <div ref={ref} className={styles.container}>
      Width: {width}px, Height: {height}px
    </div>
  );
};

export default UseContainerDimensionsExample;
