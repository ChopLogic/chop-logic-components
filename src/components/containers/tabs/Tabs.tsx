import React, { useState } from 'react';

import ChopLogicTabContent from './elements/TabContent';
import ChopLogicTabList from './elements/TabList';
import { StyledTabsContainer } from './Tabs.styled';

export type ChopLogicTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: ChopLogicTabsMode;
};

export type ChopLogicTabItem = {
  content: React.ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
};

export type ChopLogicTabsMode = 'vertical' | 'horizontal';

const ChopLogicTabs: React.FC<ChopLogicTabsProps> = ({ tabs, defaultTabId, mode = 'horizontal' }) => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <StyledTabsContainer $mode={mode}>
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
