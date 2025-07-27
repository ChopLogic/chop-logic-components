import { ChopLogicOrientationMode } from '../../../enums';
import { ChopLogicTabItem } from '../../../models';
import { default as React } from '../../../../node_modules/react';
type ChopLogicTabListProps = {
    tabs: ChopLogicTabItem[];
    tabIds: string[];
    onTabSelect: (id: string) => void;
    selectedTabId: string;
    tabPanelIds: string[];
    mode: ChopLogicOrientationMode;
};
export declare const TabList: React.FC<ChopLogicTabListProps>;
export {};
