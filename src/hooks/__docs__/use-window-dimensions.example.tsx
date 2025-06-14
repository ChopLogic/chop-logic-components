import styles from '@styles/storybook/Container.module.scss';
import { useWindowDimensions } from '../use-window-dimensions';

export const UseWindowDimensionsExample = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div className={styles.container}>
      <p>Window width: {width}px;</p>
      <p>Window height: {height}px;</p>
    </div>
  );
};
