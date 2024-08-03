import React, { useState } from 'react';

import ChopLogicTabContent from './elements/Content';
import ChopLogicTabButton from './elements/Tab';
import { ChopLogicTabsProps } from './types';

const ChopLogicTabs = ({ tabs, defaultTabId }: ChopLogicTabsProps): React.ReactElement => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [activeTab, setActiveTab] = useState(defaultId);

  const tabButtons = tabs.map((item, index) => {
    const { id, title } = item;

    return (
      <ChopLogicTabButton
        key={id}
        title={title}
        onSelect={setActiveTab}
        tabId={id}
        isActive={id === activeTab}
        tabPanelId={tabPanelIds[index]}
      />
    );
  });

  const tabContent = tabs.find((item) => item.id === activeTab)?.content;

  return (
    <div>
      <div role='tablist'>{tabButtons}</div>
      <ChopLogicTabContent content={tabContent} tabId={activeTab} tabPanelId={`tabpanel_${activeTab}`} />
    </div>
  );
};

export default ChopLogicTabs;
