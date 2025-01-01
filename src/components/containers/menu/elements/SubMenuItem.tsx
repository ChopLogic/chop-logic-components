import React, { PropsWithChildren } from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicIcon } from '@/elements';
import { ChopLogicButtonView, ChopLogicIconName } from '@/enums';
import { ChopLogicMenuItem, ChopLogicTheme } from '@/models';

import { StyledSubMenuItem } from '../Meny.styled.ts';

type SubMenuProps = PropsWithChildren & {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
  isSubMenuOpened: boolean;
  toggleSubMenu: () => void;
};

const SubMenuItem: React.FC<SubMenuProps> = ({ item, theme, isSubMenuOpened, toggleSubMenu, children }) => {
  const { icon, label } = item;

  return (
    <StyledSubMenuItem role='menuitem' aria-haspopup='true' aria-expanded={isSubMenuOpened} $theme={theme}>
      <ChopLogicIcon name={icon} />
      <span>{label}</span>
      <ChopLogicButton
        view={ChopLogicButtonView.Icon}
        icon={isSubMenuOpened ? ChopLogicIconName.ArrowUp : ChopLogicIconName.ArrowDown}
        onClick={toggleSubMenu}
      />
      {isSubMenuOpened && children}
    </StyledSubMenuItem>
  );
};

export default SubMenuItem;
