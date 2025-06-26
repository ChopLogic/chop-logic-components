import React from 'react';
import styles from '@organisms/grid/Grid.module.scss';
import { GridCheckbox } from './Checkbox.tsx';

type Props = {
  rowId: string;
  isRowSelected: boolean;
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  disabled?: boolean;
};

export const SelectGridRowCell: React.FC<Props> = ({ rowId, isRowSelected, selectRowById, deselectRowById, disabled }) => {
  const handleSelectById = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      selectRowById(rowId);
    } else {
      deselectRowById(rowId);
    }
  };

  return (
    <td className={styles.grid_cell}>
      <GridCheckbox label='Select row' onChange={handleSelectById} id={`select_row_${rowId}`} checked={isRowSelected} disabled={disabled} />
    </td>
  );
};
