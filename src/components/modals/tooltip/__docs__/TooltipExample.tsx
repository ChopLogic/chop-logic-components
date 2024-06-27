import React from 'react';

import ChopLogicTooltip, { ChopLogicTooltipProps } from '../Tooltip';

const Example: React.FC<ChopLogicTooltipProps> = () => {
  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at animi nostrum nulla illo ad sit facere velit illum in quaerat ratione
      temporibus porro sint consequuntur, non rerum. Sequi, nostrum. Lorem ipsum dolor, sit amet consectetur
      <ChopLogicTooltip>
        <strong> adipisicing elit</strong>
      </ChopLogicTooltip>
      . At, voluptatum modi maxime sapiente facere voluptatibus, eos voluptates quae earum repudiandae nemo perspiciatis ea non laudantium
      accusamus labore sed tempore provident?
      <div>Test content</div>
    </div>
  );
};

export default Example;
