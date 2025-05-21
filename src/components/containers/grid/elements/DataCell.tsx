import React from 'react';
import styles from '../Grid.module.scss';

const GridDataCell: React.FC<{ value: React.ReactElement | string }> = ({ value }) => {
  return <td className={styles.grid_cell}>{value}</td>;
};

export default GridDataCell;
