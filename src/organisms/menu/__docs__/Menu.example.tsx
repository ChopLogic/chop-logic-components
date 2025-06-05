import React from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuProps } from '@models';
import { ChopLogicMenu } from '@organisms';

const MenuExample: React.FC<ChopLogicMenuProps> = (props) => {
  return (
    <div
      style={{
        width: props.mode === ChopLogicOrientationMode.Vertical ? '400px' : '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ChopLogicMenu {...props} />
    </div>
  );
};

export default MenuExample;
