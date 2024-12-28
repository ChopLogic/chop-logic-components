import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTabsMode } from '../../../../enums';
import { ChopLogicTabItem, ChopLogicTheme } from '../../../../models';

type ChopLogicTabListProps = {
    tabs: ChopLogicTabItem[];
    tabIds: string[];
    onTabSelect: (id: string) => void;
    selectedTabId: string;
    tabPanelIds: string[];
    mode: ChopLogicTabsMode;
    theme: ChopLogicTheme;
};
declare const ChopLogicTabList: React.FC<ChopLogicTabListProps>;
export default ChopLogicTabList;
