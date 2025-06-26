import React from 'react';
import styles from '@organisms/grid/Grid.module.scss';

export const GridHeaderCell: React.FC<{ title?: string; component?: React.ReactElement }> = ({ title, component }) => {
  return <th className={styles.header_cell}>{component ?? title ?? ''}</th>;
};
