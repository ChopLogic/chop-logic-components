import type { FC } from 'react';

import styles from './HeaderCell.module.scss';

export const GridHeaderCell: FC<{ title?: string; component?: React.ReactElement }> = ({
  title,
  component,
}) => {
  return <th className={styles.headerCell}>{component ?? title ?? ''}</th>;
};
