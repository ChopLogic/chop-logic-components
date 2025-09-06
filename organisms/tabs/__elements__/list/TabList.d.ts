import { ChopLogicOrientationMode } from '../../../../enums';
import { ChopLogicTabItem } from '../../../../models';
import { FC } from '../../../../../node_modules/react';
type ChopLogicTabListProps = {
    tabs: ChopLogicTabItem[];
    tabIds: string[];
    onTabSelect: (id: string) => void;
    selectedTabId: string;
    tabPanelIds: string[];
    mode: ChopLogicOrientationMode;
};
export declare const TabList: FC<ChopLogicTabListProps>;
export {};
