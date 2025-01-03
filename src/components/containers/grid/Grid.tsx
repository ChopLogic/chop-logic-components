import React from 'react';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicGridProps } from '@models';

import ChopLogicGridBody from './elements/Body';
import GridColumnGroup from './elements/ColumnGroup';
import ChopLogicGridHead from './elements/Head';
import { useChopLogicGridController } from './controller';
import { StyledGrid, StyledGridCaption } from './Grid.styled';

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
  const theme = useChopLogicTheme();

  return (
    <StyledGrid {...rest}>
      {caption && <StyledGridCaption $theme={theme}>{caption}</StyledGridCaption>}
      <GridColumnGroup columns={columns} selectable={selectable} theme={theme} />
      <ChopLogicGridHead
        gridId={elementId}
        columns={columns}
        selectable={selectable}
        selectAll={handleSelectAll}
        deselectAll={handleDeselectAll}
        isAllSelected={isAllSelected}
        isAllCheckboxDisabled={isAllCheckboxDisabled}
        theme={theme}
      />
      <ChopLogicGridBody
        columns={columns}
        data={data}
        selectable={selectable}
        selectRowById={handleSelectRowById}
        deselectRowById={handleDeselectRowById}
        selectedIds={selectedIds}
        renderDataItem={renderDataItem}
        theme={theme}
      />
    </StyledGrid>
  );
};

export default ChopLogicGrid;
