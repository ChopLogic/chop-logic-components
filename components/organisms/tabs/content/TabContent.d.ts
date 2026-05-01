import { ChopLogicTabItem } from '../../../../types';
import { FC, ReactElement } from '../../../../../node_modules/react';
export declare const TabContent: FC<{
    tabs: ChopLogicTabItem[];
    selectedTabId: string;
    extendable?: boolean;
    extendedTabContent?: ReactElement;
}>;
