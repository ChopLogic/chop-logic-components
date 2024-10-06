import { useState } from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicGridBody from './elements/Body';
import ChopLogicGridHead from './elements/Head';
import { GridProps } from './types';

const ChopLogicGrid: React.FC<GridProps> = ({ columns, data, id, selectable = false }) => {
  const { elementId } = useElementIds(id);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const allIds = data.map((item) => item.id);

  const handleSelectAll = () => {
    setSelectedIds(allIds);
  };

  const handleDeselectAll = () => {
    setSelectedIds([]);
  };

  const handleSelectRowById = (id: string) => {
    setSelectedIds([...selectedIds, id]);
  };

  const handleDeselectRowById = (id: string) => {
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  return (
    <table>
      <ChopLogicGridHead
        gridId={elementId}
        columns={columns}
        selectable={selectable}
        selectAll={handleSelectAll}
        deselectAll={handleDeselectAll}
        isAllSelected={allIds.length === selectedIds.length}
        isAllCheckboxDisabled={data.some((item) => item?.disabled)}
      />
      <ChopLogicGridBody
        columns={columns}
        data={data}
        selectable={selectable}
        selectRowById={handleSelectRowById}
        deselectRowById={handleDeselectRowById}
        selectedIds={selectedIds}
      />
    </table>
  );
};

export default ChopLogicGrid;
