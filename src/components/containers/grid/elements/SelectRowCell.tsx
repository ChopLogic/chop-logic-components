import React from 'react';
import styles from '../Grid.module.scss';
import GridCheckbox from './Checkbox';

type SelectAllGridRowsCheckbox = {
  rowId: string;
  isRowSelected: boolean;
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  disabled?: boolean;
};

const SelectGridRowCell: React.FC<SelectAllGridRowsCheckbox> = ({ rowId, isRowSelected, selectRowById, deselectRowById, disabled }) => {
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

export default SelectGridRowCell;
