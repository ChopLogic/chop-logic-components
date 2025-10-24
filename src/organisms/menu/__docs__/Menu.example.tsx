import { OrientationMode } from '@enums';
import type { MenuProps } from '@models';
import { Menu } from '@organisms';
import type { FC } from 'react';

const MenuExample: FC<MenuProps> = ({
  mode = OrientationMode.Vertical,
  openedOn = 'click',
  items = [],
  ...rest
}) => {
  return (
    <div
      style={{
        width: mode === OrientationMode.Vertical ? '400px' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Menu items={items} mode={mode} openedOn={openedOn} {...rest} />
    </div>
  );
};

export default MenuExample;
