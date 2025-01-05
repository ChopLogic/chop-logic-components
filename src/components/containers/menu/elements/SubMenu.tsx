import React, { PropsWithChildren, useRef } from 'react';
import { ChopLogicIcon } from '@elements';
import { ChopLogicIconName, ChopLogicOrientationMode } from '@enums';
import { useClickOutside } from '@hooks';
import { ChopLogicMenuItem, ChopLogicTheme } from '@models';

import { StyledSubMenu, StyledSubMenuText } from '../Meny.styled.ts';

type SubMenuProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
  isSubMenuOpened: boolean;
  mode: ChopLogicOrientationMode;
  openedOn: 'click' | 'hover';
  toggleSubMenu: () => void;
  openSubMenu: () => void;
  closeSubMenu: () => void;
};

const SubMenu: React.FC<SubMenuProps> = ({
  item,
  theme,
  isSubMenuOpened,
  toggleSubMenu,
  openSubMenu,
  closeSubMenu,
  openedOn,
  mode,
  children,
}) => {
  const { icon, link, label } = item;
  const ref = useRef(null);
  const dependentRef = useRef(null);

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

  const onClickOutsideHandler = () => {
    if (mode === ChopLogicOrientationMode.Vertical) return;
    closeSubMenu();
  };

  useClickOutside({ ref, dependentRef, onClickOutsideHandler });

  return (
    <StyledSubMenu
      tabIndex={0}
      role='menuitem'
      aria-haspopup='true'
      aria-expanded={isSubMenuOpened}
      $theme={theme}
      $mode={mode}
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      <StyledSubMenuText
        ref={dependentRef}
        $theme={theme}
        onClick={toggleSubMenu}
        onMouseEnter={openedOn === 'hover' ? openSubMenu : undefined}
      >
        {itemContent}
        <ChopLogicIcon name={isSubMenuOpened ? ChopLogicIconName.ArrowUp : ChopLogicIconName.ArrowDown} />
      </StyledSubMenuText>
      {isSubMenuOpened && children}
    </StyledSubMenu>
  );
};

export default SubMenu;
