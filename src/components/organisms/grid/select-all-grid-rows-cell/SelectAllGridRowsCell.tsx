import type { ChangeEvent, FC } from 'react';

import { GridCheckbox } from '../checkbox/GridCheckbox';
import styles from './SelectAllGridRowsCell.module.scss';

type Props = {
  gridId: string;
  isAllSelected: boolean;
  selectAll: () => void;
  deselectAll: () => void;
  disabled?: boolean;
};

export const SelectAllGridRowsCell: FC<Props> = ({
  gridId,
  isAllSelected,
  selectAll,
  deselectAll,
  disabled,
}) => {
  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      selectAll();
    } else {
      deselectAll();
    }
  };

  return (
    <th className={styles.headerCell}>
      <GridCheckbox
        label="Select all rows"
        onChange={handleSelectAll}
        id={`select_all_${gridId}`}
        checked={isAllSelected}
        disabled={disabled}
      />
    </th>
  );
};
