import { OrientationMode } from '../../../../enums';
import { ChopLogicTabItem } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
type Props = {
    tabs: ChopLogicTabItem[];
    tabIds: string[];
    onTabSelect: (id: string) => void;
    selectedTabId: string;
    tabPanelIds: string[];
    mode: OrientationMode;
    onTabTitleChange?: (tabId: string, newTitle: string) => void;
    stretched?: boolean;
    editable?: boolean;
    extendable?: boolean;
    onTabAdd?: () => void;
    onTabDelete?: (id: string) => void;
};
export declare const TabList: FC<Props>;
export {};
