import React from 'react';
import { ChopLogicMenu } from '@components';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuProps } from '@models';

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
