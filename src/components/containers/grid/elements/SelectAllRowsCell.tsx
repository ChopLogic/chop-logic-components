import React from 'react';

import { StyledGridHeaderCell } from '../Grid.styled';

import GridCheckbox from './Checkbox';

type SelectAllGridRowsCheckbox = {
  gridId: string;
  isAllSelected: boolean;
  selectAll: () => void;
  deselectAll: () => void;
  disabled?: boolean;
};

const SelectAllRowsCell: React.FC<SelectAllGridRowsCheckbox> = ({ gridId, isAllSelected, selectAll, deselectAll, disabled }) => {
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      selectAll();
    } else {
      deselectAll();
    }
  };

  return (
    <StyledGridHeaderCell>
      <GridCheckbox
        label='Select all rows'
        onChange={handleSelectAll}
        id={`select_all_${gridId}`}
        checked={isAllSelected}
        disabled={disabled}
      />
    </StyledGridHeaderCell>
  );
};

export default SelectAllRowsCell;
