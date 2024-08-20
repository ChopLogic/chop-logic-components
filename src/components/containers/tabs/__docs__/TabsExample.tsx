import ChopLogicTabs, { ChopLogicTabItem } from '../Tabs';

const tabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'Tab 1', content: <div>Content for Tab 1</div> },
  { id: 'tab2', title: 'Tab 2', content: <div>Content for Tab 2</div> },
  { id: 'tab3', title: 'Tab 3', content: <div>Content for Tab 3</div> },
];

const ExampleComponent = () => <ChopLogicTabs tabs={tabs} defaultTabId='tab1' />;

export default ExampleComponent;
