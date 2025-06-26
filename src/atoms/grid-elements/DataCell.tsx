import React from 'react';
import styles from '@organisms/grid/Grid.module.scss';

export const GridDataCell: React.FC<{ value: React.ReactElement | string }> = ({ value }) => {
  return <td className={styles.grid_cell}>{value}</td>;
};
