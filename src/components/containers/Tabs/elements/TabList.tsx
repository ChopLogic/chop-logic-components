import React from 'react';

import { StyledTabList } from '../Tabs.styled';
import { ChopLogicTabItem, ChopLogicTabsMode } from '../types';

import ChopLogicTabButton from './TabButton';

type ChopLogicTabListProps = {
  tabs: ChopLogicTabItem[];
  onTabSelect: (id: string) => void;
  selectedTabId: string;
  tabPanelIds: string[];
  mode: ChopLogicTabsMode;
};

const ChopLogicTabList: React.FC<ChopLogicTabListProps> = ({ tabs, onTabSelect, selectedTabId, tabPanelIds, mode }) => {
  return (
    <StyledTabList role='tablist' $mode={mode}>
      {tabs.map(({ id, title, disabled }, index) => {
        return (
          <ChopLogicTabButton
            key={id}
            title={title}
            onTabSelect={onTabSelect}
            tabId={id}
            isSelected={id === selectedTabId}
            isDisabled={disabled}
            tabPanelId={tabPanelIds[index]}
            mode={mode}
          />
        );
      })}
    </StyledTabList>
  );
};

export default ChopLogicTabList;
