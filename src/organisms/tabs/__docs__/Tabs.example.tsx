import type { TabsProps } from '@models';
import { Tabs } from '@organisms';

export const TabsExample: React.FC<TabsProps> = (props) => {
  const handleTabTitleChange = (tabId: string, newTitle: string) => {
    props.onTabTitleChange?.(tabId, newTitle);
  };

  const handleTabAdd = () => {
    props.onTabAdd?.();
  };

  return (
    <Tabs
      {...props}
      onTabTitleChange={handleTabTitleChange}
      onTabAdd={props.extendable ? handleTabAdd : undefined}
    />
  );
};
