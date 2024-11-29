import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ChopLogicTabsProps } from '@/types';
import { getChopLogicTheme } from '@/utils';

import ChopLogicTabContent from './elements/TabContent';
import ChopLogicTabList from './elements/TabList';
import { StyledTabsContainer } from './Tabs.styled';

const ChopLogicTabs: React.FC<ChopLogicTabsProps> = ({ tabs, defaultTabId, mode = 'horizontal', theme, ...rest }) => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);
  const themeValues = getChopLogicTheme(theme);

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <ThemeProvider theme={themeValues}>
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
    </ThemeProvider>
  );
};

export default ChopLogicTabs;
