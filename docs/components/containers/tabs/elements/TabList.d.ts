import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTabItem, ChopLogicTabsMode } from '../types';

type ChopLogicTabListProps = {
    tabs: ChopLogicTabItem[];
    tabIds: string[];
    onTabSelect: (id: string) => void;
    selectedTabId: string;
    tabPanelIds: string[];
    mode: ChopLogicTabsMode;
};
declare const ChopLogicTabList: React.FC<ChopLogicTabListProps>;
export default ChopLogicTabList;
