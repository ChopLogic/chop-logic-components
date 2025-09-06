import { FC, ReactElement } from 'react';

import styles from './GridDataCell.module.scss';

export const GridDataCell: FC<{ value: ReactElement | string }> = ({ value }) => {
  return <td className={styles.cell}>{value}</td>;
};
