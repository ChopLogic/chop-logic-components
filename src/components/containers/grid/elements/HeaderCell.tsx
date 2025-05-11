import React from 'react';
import styles from '../Grid.module.scss';

const GridHeaderCell: React.FC<{ title?: string; component?: React.ReactElement }> = ({ title, component }) => {
  return <th className={styles.header_cell}>{component ?? title ?? ''}</th>;
};

export default GridHeaderCell;
