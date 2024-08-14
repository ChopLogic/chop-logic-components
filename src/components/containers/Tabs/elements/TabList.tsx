import React from 'react';

import { StyledTabList } from '../Tabs.styled';
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
    <StyledTabList role='tablist'>
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
          />
        );
      })}
    </StyledTabList>
  );
};

export default ChopLogicTabList;
