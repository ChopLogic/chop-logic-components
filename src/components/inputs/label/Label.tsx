import React, { PropsWithChildren } from 'react';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({ label, required, children }) => {
  return (
    <label>
      {label}
      {required && <abbr title='required'>*</abbr>}
      {children}
    </label>
  );
};

export default ChopLogicLabel;
