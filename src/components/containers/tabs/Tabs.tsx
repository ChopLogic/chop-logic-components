import React, { useState } from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicTabsProps } from '@models';

import ChopLogicTabContent from './elements/TabContent';
import ChopLogicTabList from './elements/TabList';
import { StyledTabs } from './Tabs.styled';

const ChopLogicTabs: React.FC<ChopLogicTabsProps> = ({ tabs, defaultTabId, mode = ChopLogicOrientationMode.Horizontal, ...rest }) => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);
  const theme = useChopLogicTheme();

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <StyledTabs $mode={mode} {...rest}>
      <ChopLogicTabList
        tabs={tabs}
        selectedTabId={selectedTabId}
        tabPanelIds={tabPanelIds}
        onTabSelect={handleTabSelect}
        mode={mode}
        tabIds={tabIds}
        theme={theme}
      />
      <ChopLogicTabContent tabs={tabs} selectedTabId={selectedTabId} theme={theme} />
    </StyledTabs>
  );
};

export default ChopLogicTabs;
