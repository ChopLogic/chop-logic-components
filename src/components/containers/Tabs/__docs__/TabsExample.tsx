import React from 'react';

import ChopLogicTabs from '../Tabs';
import { ChopLogicTabItem } from '../types';

const tabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'Tab 1', tabContent: <div>Content for Tab 1</div> },
  { id: 'tab2', title: 'Tab 2', tabContent: <div>Content for Tab 2</div> },
  { id: 'tab3', title: 'Tab 3', tabContent: <div>Content for Tab 3</div> },
];

const ExampleComponent = () => <ChopLogicTabs tabs={tabs} defaultTabId='tab1' />;

export default ExampleComponent;
