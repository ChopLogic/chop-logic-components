import { ChangeEvent, FC } from 'react';

import { GridCheckbox } from '../checkbox/GridCheckbox';
import styles from './SelectGridRowCell.module.scss';

type Props = {
  rowId: string;
  isRowSelected: boolean;
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  disabled?: boolean;
};

export const SelectGridRowCell: FC<Props> = ({ rowId, isRowSelected, selectRowById, deselectRowById, disabled }) => {
  const handleSelectById = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      selectRowById(rowId);
    } else {
      deselectRowById(rowId);
    }
  };

  return (
    <td className={styles.cell}>
      <GridCheckbox label='Select row' onChange={handleSelectById} id={`select_row_${rowId}`} checked={isRowSelected} disabled={disabled} />
    </td>
  );
};
