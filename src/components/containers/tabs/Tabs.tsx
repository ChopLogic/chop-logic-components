import React, { useState } from 'react';

import ChopLogicTabContent from './elements/TabContent';
import ChopLogicTabList from './elements/TabList';
import { StyledTabsContainer } from './Tabs.styled';
import { ChopLogicTabsProps } from './types';

const ChopLogicTabs: React.FC<ChopLogicTabsProps> = ({ tabs, defaultTabId, mode = 'horizontal', ...rest }) => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <StyledTabsContainer $mode={mode} {...rest}>
      <ChopLogicTabList
        tabs={tabs}
        selectedTabId={selectedTabId}
        tabPanelIds={tabPanelIds}
        onTabSelect={handleTabSelect}
        mode={mode}
        tabIds={tabIds}
      />
      <ChopLogicTabContent tabs={tabs} selectedTabId={selectedTabId} />
    </StyledTabsContainer>
  );
};

export default ChopLogicTabs;
