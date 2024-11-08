import React from 'react';

import ChopLogicGridBody from './elements/Body';
import GridColumnGroup from './elements/ColumnGroup';
import ChopLogicGridHead from './elements/Head';
import { useChopLogicGridController } from './controller';
import { StyledGrid, StyledGridCaption } from './Grid.styled';
import { ChopLogicGridProps } from './types';

const ChopLogicGrid: React.FC<ChopLogicGridProps> = ({
  columns,
  data,
  id,
  onSelect,
  renderDataItem,
  caption,
  selectable = false,
  ...rest
}) => {
  const {
    elementId,
    handleSelectAll,
    handleDeselectAll,
    isAllCheckboxDisabled,
    isAllSelected,
    handleDeselectRowById,
    handleSelectRowById,
    selectedIds,
  } = useChopLogicGridController({ id, data, onSelect });

  return (
    <StyledGrid {...rest}>
      {caption && <StyledGridCaption>{caption}</StyledGridCaption>}
      <GridColumnGroup columns={columns} selectable={selectable} />
      <ChopLogicGridHead
        gridId={elementId}
        columns={columns}
        selectable={selectable}
        selectAll={handleSelectAll}
        deselectAll={handleDeselectAll}
        isAllSelected={isAllSelected}
        isAllCheckboxDisabled={isAllCheckboxDisabled}
      />
      <ChopLogicGridBody
        columns={columns}
        data={data}
        selectable={selectable}
        selectRowById={handleSelectRowById}
        deselectRowById={handleDeselectRowById}
        selectedIds={selectedIds}
        renderDataItem={renderDataItem}
      />
    </StyledGrid>
  );
};

export default ChopLogicGrid;
