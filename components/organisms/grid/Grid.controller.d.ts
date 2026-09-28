import { GridSortDirection } from '../../../enums';
import { GridFilterState, GridItem, GridSortState } from '../../../types';
export declare const useGridController: ({ data, id, onSelect, sortField, sortDirection, onSortChange, filterState, onFilterChange, }: {
    data: GridItem[];
    id?: string;
    onSelect?: (ids: string[]) => void;
    sortField?: string | null;
    sortDirection?: GridSortDirection | null;
    onSortChange?: (state: GridSortState) => void;
    filterState?: GridFilterState;
    onFilterChange?: (state: GridFilterState) => void;
}) => {
    elementId: string;
    isAllSelected: boolean;
    isAllCheckboxDisabled: boolean;
    selectedIds: string[];
    handleSelectAll: () => void;
    handleDeselectAll: () => void;
    handleSelectRowById: (id: string) => void;
    handleDeselectRowById: (id: string) => void;
    sortState: GridSortState;
    handleSortClick: (field: string) => void;
    sortedData: GridItem[];
    filterState: GridFilterState;
    handleApplyFilter: (field: string, condition: import('../../../types').GridFilterCondition) => void;
    handleClearFilter: (field: string) => void;
    filteredAndSortedData: GridItem[];
    isEmpty: boolean;
};
