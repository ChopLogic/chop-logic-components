import React from 'react';

const GridHeaderCell: React.FC<{ title?: string; component?: React.ReactElement }> = ({ title, component }) => {
  return <th>{component ?? title ?? ''}</th>;
};

export default GridHeaderCell;
