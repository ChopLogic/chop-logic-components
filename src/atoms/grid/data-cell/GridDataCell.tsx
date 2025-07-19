import React from 'react';

import styles from './GridDataCell.module.scss';

export const GridDataCell: React.FC<{ value: React.ReactElement | string }> = ({ value }) => {
  return <td className={styles.cell}>{value}</td>;
};
