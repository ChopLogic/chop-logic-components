import React from 'react';

import { ChopLogicTabsMode } from '@/types';

import { StyledTabButton } from '../Tabs.styled';

type ChopLogicTabButtonProps = {
  title: string;
  tabId: string;
  onTabSelect: (id: string) => void;
  tabPanelId: string;
  isSelected: boolean;
  mode: ChopLogicTabsMode;
  isDisabled?: boolean;
};

const ChopLogicTabButton: React.FC<ChopLogicTabButtonProps> = ({
  title,
  onTabSelect,
  tabId,
  isSelected,
  isDisabled = false,
  tabPanelId,
  mode,
}) => {
  return (
    <StyledTabButton
      role='tab'
      id={tabId}
      onClick={() => onTabSelect(tabId)}
      aria-selected={isSelected}
      aria-controls={tabPanelId}
      $selected={isSelected}
      $disabled={isDisabled}
      $mode={mode}
    >
      {title}
    </StyledTabButton>
  );
};

export default ChopLogicTabButton;
