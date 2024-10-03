import React from 'react';

import ChopLogicCheckbox from 'components/inputs/checkbox/Checkbox';

type SelectAllGridRowsCheckbox = {
  gridId: string;
  selectAll: () => void;
  deselectAll: () => void;
};

const SelectAllGridRowsCheckbox: React.FC<SelectAllGridRowsCheckbox> = ({ gridId, selectAll, deselectAll }) => {
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
      <ChopLogicCheckbox noLabel label='Select all rows' name='selectAll' onChange={handleSelectAll} id={`select_all_${gridId}`} />
    </th>
  );
};

export default SelectAllGridRowsCheckbox;
