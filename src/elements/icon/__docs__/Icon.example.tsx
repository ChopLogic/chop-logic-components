import React from 'react';

import { ChopLogicIcon } from '@/elements';
import { ChopLogicIconName } from '@/enums';

import './Icon.styles.css';

const IconExample: React.FC = () => {
  const iconNames = Object.values(ChopLogicIconName);

  return (
    <div className='chop-logic-icon-container'>
      {iconNames.map((name) => (
        <div className='chop-logic-icon-container_icon' key={name}>
          <ChopLogicIcon name={name} />
          <span className='chop-logic-icon-container_name'>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconExample;
