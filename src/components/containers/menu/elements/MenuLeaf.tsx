import React from 'react';

import { ChopLogicIcon } from '@/elements';
import { ChopLogicMenuItem, ChopLogicTheme } from '@/models';

import { StyledMenuLeaf } from '../Meny.styled';

type MenuLeafProps = {
  item: ChopLogicMenuItem;
  theme: ChopLogicTheme;
};

const MenuLeaf: React.FC<MenuLeafProps> = ({ theme, item }) => {
  const { icon, link, label, onFocus, onClick, onHover } = item;

  const leafContent = link ? (
    <a href={link} target='_blank' rel='noreferrer'>
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  return (
    <StyledMenuLeaf tabIndex={0} role='menuitem' $theme={theme} onFocus={onFocus} onClick={onClick} onMouseOver={onHover}>
      <ChopLogicIcon name={icon} />
      {leafContent}
    </StyledMenuLeaf>
  );
};

export default MenuLeaf;
