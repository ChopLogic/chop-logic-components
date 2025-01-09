import React from 'react';
import { ChopLogicGrid } from '@components';
import { ChopLogicGridProps } from '@models';

const GridExample: React.FC<ChopLogicGridProps> = (props) => {
  return <ChopLogicGrid {...props} />;
};

export default GridExample;
