import React from 'react';

import GridCheckbox from './Checkbox';

type SelectAllGridRowsCheckbox = {
  rowId: string;
  isRowSelected: boolean;
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
};

const SelectGridRowCheckbox: React.FC<SelectAllGridRowsCheckbox> = ({ rowId, isRowSelected, selectRowById, deselectRowById }) => {
  const handleSelectById = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      selectRowById(rowId);
    } else {
      deselectRowById(rowId);
    }
  };

  return (
    <th>
      <GridCheckbox label='Select row' onChange={handleSelectById} id={`select_row_${rowId}`} checked={isRowSelected} />
    </th>
  );
};

export default SelectGridRowCheckbox;
