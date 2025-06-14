import React from 'react';
import { ChopLogicGridProps } from '@models';
import { ChopLogicGrid } from '@organisms';

export const GridExample: React.FC<ChopLogicGridProps> = (props) => {
  return <ChopLogicGrid {...props} />;
};
