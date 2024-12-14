import React from 'react';

import { ChopLogicGrid } from '@/components';
import { ChopLogicGridProps } from '@/types';

const GridExample: React.FC<ChopLogicGridProps> = (props) => {
  return <ChopLogicGrid {...props} />;
};

export default GridExample;
