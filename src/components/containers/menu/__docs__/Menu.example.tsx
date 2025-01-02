import React from 'react';

import { ChopLogicMenu } from '@/components';
import { ChopLogicMenuProps } from '@/models';

const MenuExample: React.FC<ChopLogicMenuProps> = (props) => {
  return (
    <div style={{ width: '400px' }}>
      <ChopLogicMenu {...props} />
    </div>
  );
};

export default MenuExample;
