import React from 'react';

import ChopLogicCheckbox from 'components/inputs/checkbox/Checkbox';

type SelectAllGridRowsCheckbox = {
  rowId: string;
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
};

const SelectGridRowCheckbox: React.FC<SelectAllGridRowsCheckbox> = ({ rowId, selectRowById, deselectRowById }) => {
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
      <ChopLogicCheckbox noLabel label='Select row' name='selectAll' onChange={handleSelectById} id={`select_row_${rowId}`} />
    </th>
  );
};

export default SelectGridRowCheckbox;
