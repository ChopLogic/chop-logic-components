import styles from '@styles/storybook/Container.module.scss';
import { CSSProperties, FC, useRef } from 'react';

import { useIsOverflow } from '../use-is-overflow.ts';

const containerStyles: CSSProperties = {
  width: '250px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  border: '1px solid grey',
  padding: '1em',
};

export const UseIsOverflowExample: FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isWidthOverflow = useIsOverflow(containerRef, 'width');

  return (
    <div className={styles.container}>
      <div style={containerStyles} ref={containerRef}>
        {text}
      </div>
      {isWidthOverflow && <p>Text overflows the container.</p>}
    </div>
  );
};
