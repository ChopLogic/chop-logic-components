import { ChopLogicGridProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import { GridBody } from './body/GridBody';
import { GridColumnGroup } from './column-group/GridColumnGroup';
import { useChopLogicGridController } from './Grid.controller';
import styles from './Grid.module.scss';
import { GridHead } from './head/GridHead';

const ChopLogicGrid: FC<ChopLogicGridProps> = ({
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
      <GridHead
        gridId={elementId}
        columns={columns}
        selectable={selectable}
        selectAll={handleSelectAll}
        deselectAll={handleDeselectAll}
        isAllSelected={isAllSelected}
        isAllCheckboxDisabled={isAllCheckboxDisabled}
      />
      <GridBody
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
