import React from 'react';

import GridCheckbox from './Checkbox';

type SelectAllGridRowsCheckbox = {
  gridId: string;
  isAllSelected: boolean;
  selectAll: () => void;
  deselectAll: () => void;
};

const SelectAllGridRowsCheckbox: React.FC<SelectAllGridRowsCheckbox> = ({ gridId, isAllSelected, selectAll, deselectAll }) => {
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      selectAll();
    } else {
      deselectAll();
    }
  };

  return (
    <th>
      <GridCheckbox label='Select all rows' onChange={handleSelectAll} id={`select_all_${gridId}`} checked={isAllSelected} />
    </th>
  );
};

export default SelectAllGridRowsCheckbox;
