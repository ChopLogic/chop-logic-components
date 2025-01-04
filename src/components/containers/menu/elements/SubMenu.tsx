import React, { PropsWithChildren } from 'react';
import { ChopLogicIcon } from '@elements';
import { ChopLogicIconName } from '@enums';
import { ChopLogicMenuItem, ChopLogicTheme } from '@models';

import { StyledSubMenu, StyledSubMenuText } from '../Meny.styled.ts';

type SubMenuProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
  isSubMenuOpened: boolean;
  openedOn: 'click' | 'hover';
  toggleSubMenu: () => void;
  openSubMenu: () => void;
};

const SubMenu: React.FC<SubMenuProps> = ({ item, theme, isSubMenuOpened, toggleSubMenu, openSubMenu, openedOn, children }) => {
  const { icon, link, label } = item;

  const itemContent = link ? (
    <a href={link} target='_blank' rel='noreferrer'>
      <ChopLogicIcon name={icon} />
      {label}
    </a>
  ) : (
    <span>
      <ChopLogicIcon name={icon} />
      {label}
    </span>
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.stopPropagation();
    if (e.key === ' ') {
      toggleSubMenu();
    }
  };

  return (
    <StyledSubMenu
      tabIndex={0}
      role='menuitem'
      aria-haspopup='true'
      aria-expanded={isSubMenuOpened}
      $theme={theme}
      $isOpened={isSubMenuOpened}
      onKeyDown={handleKeyDown}
    >
      <StyledSubMenuText $theme={theme} onClick={toggleSubMenu} onMouseEnter={openedOn === 'hover' ? openSubMenu : undefined}>
        {itemContent}
        <ChopLogicIcon name={isSubMenuOpened ? ChopLogicIconName.ArrowUp : ChopLogicIconName.ArrowDown} />
      </StyledSubMenuText>
      {isSubMenuOpened && children}
    </StyledSubMenu>
  );
};

export default SubMenu;
