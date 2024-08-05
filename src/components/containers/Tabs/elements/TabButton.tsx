import React from 'react';

import { StyledTabButton } from '../Tabs.styled';

type ChopLogicTabButtonProps = {
  title: string;
  tabId: string;
  onTabSelect: (id: string) => void;
  tabPanelId: string;
  isSelected: boolean;
  isDisabled?: boolean;
};

const ChopLogicTabButton: React.FC<ChopLogicTabButtonProps> = ({
  title,
  onTabSelect,
  tabId,
  isSelected,
  isDisabled = false,
  tabPanelId,
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
    >
      {title}
    </StyledTabButton>
  );
};

export default ChopLogicTabButton;
