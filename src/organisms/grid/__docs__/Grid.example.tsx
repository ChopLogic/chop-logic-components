import { ChopLogicGridProps } from '@models';
import { ChopLogicGrid } from '@organisms';
import React from 'react';

export const GridExample: React.FC<ChopLogicGridProps> = (props) => {
  return <ChopLogicGrid {...props} />;
};
