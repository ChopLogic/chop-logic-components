import React from 'react';

import GridCheckbox from './Checkbox';

type SelectAllGridRowsCheckbox = {
  gridId: string;
  isAllSelected: boolean;
  selectAll: () => void;
  deselectAll: () => void;
  disabled?: boolean;
};

const SelectAllGridRowsCheckbox: React.FC<SelectAllGridRowsCheckbox> = ({ gridId, isAllSelected, selectAll, deselectAll, disabled }) => {
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
      <GridCheckbox
        label='Select all rows'
        onChange={handleSelectAll}
        id={`select_all_${gridId}`}
        checked={isAllSelected}
        disabled={disabled}
      />
    </th>
  );
};

export default SelectAllGridRowsCheckbox;
