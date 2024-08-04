import React, { useState } from 'react';

import ChopLogicTabContent from './elements/TabContent';
import ChopLogicTabList from './elements/TabList';
import { ChopLogicTabsProps } from './types';

const ChopLogicTabs = ({ tabs, defaultTabId }: ChopLogicTabsProps): React.ReactElement => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <div>
      <ChopLogicTabList tabs={tabs} selectedTabId={selectedTabId} tabPanelIds={tabPanelIds} onTabSelect={handleTabSelect} />
      <ChopLogicTabContent tabs={tabs} selectedTabId={selectedTabId} />
    </div>
  );
};

export default ChopLogicTabs;
