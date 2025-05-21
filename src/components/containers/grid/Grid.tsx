import React from 'react';
import { ChopLogicGridProps } from '@models';
import ChopLogicGridBody from './elements/Body';
import GridColumnGroup from './elements/ColumnGroup';
import ChopLogicGridHead from './elements/Head';
import { useChopLogicGridController } from './controller';
import styles from './Grid.module.scss';
import { getClassName } from '@utils';

const ChopLogicGrid: React.FC<ChopLogicGridProps> = ({
  columns,
  data,
  id,
  onSelect,
  renderDataItem,
  caption,
  selectable = false,
  className,
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
    <table {...rest} className={getClassName([styles.grid, className])}>
      {caption && <caption className={styles.grid_caption}>{caption}</caption>}
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
    </table>
  );
};

export default ChopLogicGrid;
