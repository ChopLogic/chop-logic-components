import React from 'react';

const GridDataCell: React.FC<{ value: string | JSX.Element }> = ({ value }) => {
  return <td>{value}</td>;
};

export default GridDataCell;
