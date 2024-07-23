import React, { PropsWithChildren } from 'react';
import createClassName from 'utils/create-class-name';
import './Label.styles.css';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  className?: string;
  isTextHidden?: boolean;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({
  label,
  required,
  inputId,
  className,
  isTextHidden = false,
}) => {
  return (
    <label htmlFor={inputId} className={createClassName(['cl-label', className])}>
      {!isTextHidden && <span className='cl-label__text'>{label}</span>}
      {required && (
        <abbr title='required' className='cl-label__required'>
          *
        </abbr>
      )}
    </label>
  );
};

export default ChopLogicLabel;
