import type { GridProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './Grid.css';
import { GridBody } from './body/GridBody';
import { GridColumnGroup } from './column-group/GridColumnGroup';
import { useGridController } from './Grid.controller';
import { GridHead } from './head/GridHead';

const Grid: FC<GridProps> = ({
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
  } = useGridController({ id, data, onSelect });

  return (
    <div className="cl-grid__wrapper">
      <table {...rest} className={getClassName(['cl-grid', className])}>
        {caption && <caption className="cl-grid__caption">{caption}</caption>}
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
    </div>
  );
};

export default Grid;
