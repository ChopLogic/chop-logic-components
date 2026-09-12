import { Button } from '@components/atoms';
import { ButtonView, IconName, OrientationMode } from '@enums';
import type { ChopLogicTabItem, ListNavigationOrientation } from '@types';
import { getClassName, handleListKeyNavigation } from '@utils';
import type { FC, KeyboardEvent } from 'react';

import { TabButton } from '../button/TabButton';
import './TabList.css';

type Props = {
  tabs: ChopLogicTabItem[];
  tabIds: string[];
  onTabSelect: (id: string) => void;
  selectedTabId: string;
  tabPanelIds: string[];
  mode: OrientationMode;
  onTabTitleChange?: (tabId: string, newTitle: string) => void;
  stretched?: boolean;
  editable?: boolean;
  extendable?: boolean;
  onTabAdd?: () => void;
  onTabDelete?: (id: string) => void;
};

function getNavigationOrientation(mode: OrientationMode): ListNavigationOrientation {
  return mode === OrientationMode.Horizontal ? 'horizontal' : 'vertical';
}

export const TabList: FC<Props> = ({
  tabs,
  onTabSelect,
  onTabTitleChange,
  selectedTabId,
  tabPanelIds,
  mode,
  tabIds,
  stretched,
  editable = false,
  extendable = false,
  onTabAdd,
  onTabDelete,
}) => {
  const listClass = getClassName([
    'cl-tab-list',
    { 'cl-tab-list_vertical': mode === OrientationMode.Vertical },
  ]);

  // Create navigation items from tab IDs
  const navigationItems = tabIds.map((id) => ({ id }));
  const orientation = getNavigationOrientation(mode);

  const handleListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    handleListKeyNavigation({
      event: e,
      items: navigationItems,
      orientation,
      onSelect: onTabSelect,
    });
  };

  return (
    <div role="tablist" data-testid="tab-list" onKeyDown={handleListKeyDown} className={listClass}>
      {tabs.map(({ id, title, disabled }, index) => {
        return (
          <TabButton
            key={id}
            title={title}
            onTabSelect={onTabSelect}
            onTabTitleChange={
              onTabTitleChange ? (newTitle) => onTabTitleChange(id, newTitle) : undefined
            }
            tabId={id}
            isSelected={id === selectedTabId}
            isDisabled={disabled}
            tabPanelId={tabPanelIds[index]}
            mode={mode}
            stretched={stretched}
            editable={editable}
            extendable={extendable}
            onTabDelete={onTabDelete}
          />
        );
      })}
      {extendable && (
        <Button
          label="Add Tab"
          tooltip="Add Tab"
          view={ButtonView.Icon}
          icon={IconName.PlusCircle}
          onClick={onTabAdd}
        />
      )}
    </div>
  );
};
