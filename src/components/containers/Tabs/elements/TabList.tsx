import React from 'react';

import { ChopLogicTabItem } from '../types';

import ChopLogicTabButton from './TabButton';

type ChopLogicTabListProps = {
  tabs: ChopLogicTabItem[];
  onTabSelect: (id: string) => void;
  selectedTabId: string;
  tabPanelIds: string[];
};

const ChopLogicTabList: React.FC<ChopLogicTabListProps> = ({ tabs, onTabSelect, selectedTabId, tabPanelIds }) => {
  return (
    <div role='tablist'>
      {tabs.map(({ id, title }, index) => {
        return (
          <ChopLogicTabButton
            key={id}
            title={title}
            onTabSelect={onTabSelect}
            tabId={id}
            isSelected={id === selectedTabId}
            tabPanelId={tabPanelIds[index]}
          />
        );
      })}
    </div>
  );
};

export default ChopLogicTabList;
