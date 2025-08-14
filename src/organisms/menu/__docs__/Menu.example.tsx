import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuProps } from '@models';
import { ChopLogicMenu } from '@organisms';
import { FC } from 'react';

const MenuExample: FC<ChopLogicMenuProps> = ({ mode = ChopLogicOrientationMode.Vertical, openedOn = 'click', items = [], ...rest }) => {
  return (
    <div
      style={{
        width: mode === ChopLogicOrientationMode.Vertical ? '400px' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ChopLogicMenu items={items} mode={mode} openedOn={openedOn} {...rest} />
    </div>
  );
};

export default MenuExample;
