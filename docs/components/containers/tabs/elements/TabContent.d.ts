import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTabItem } from '../types';

declare const ChopLogicTabContent: React.FC<{
    tabs: ChopLogicTabItem[];
    selectedTabId: string;
}>;
export default ChopLogicTabContent;
