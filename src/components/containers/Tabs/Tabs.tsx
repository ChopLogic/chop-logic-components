import React, { useState } from 'react';

import ChopLogicTabContent from './elements/Content';
import ChopLogicTab from './elements/Tab';
import { ChopLogicTabsProps } from './types';

const ChopLogicTabs = ({ tabs, defaultTabId, toolBar }: ChopLogicTabsProps): React.ReactElement => {
  const tabIds = tabs.map((item) => item.id);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [activeTab, setActiveTab] = useState(defaultId);

  const titles = tabs.map((item) => {
    const { id, title } = item;

    return <ChopLogicTab key={id} title={title} onSelect={setActiveTab} tabId={id} isActive={id === activeTab} />;
  });

  const tabContent = tabs.find((item) => item.id === activeTab)?.tabContent;

  return (
    <div>
      <div role='tablist'>
        {titles}
        {toolBar && <div>{toolBar}</div>}
      </div>
      {<ChopLogicTabContent content={tabContent} tabId={activeTab} />}
    </div>
  );
};

export default ChopLogicTabs;
