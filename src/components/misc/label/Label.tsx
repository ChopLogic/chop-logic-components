import React, { PropsWithChildren } from 'react';

import { StyledLabel, StyledLabelText, StyledRequiredSign } from './Label.styled';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  className?: string;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({
  label,
  required,
  inputId,
  className,
  icon,
  iconPosition,
  isTextHidden = false,
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';
  const requiredSign = <StyledRequiredSign title='required'>*</StyledRequiredSign>;

  return (
    <StyledLabel htmlFor={inputId} className={className}>
      {isLeftIconVisible && icon}
      {!isTextHidden && <StyledLabelText>{label}</StyledLabelText>}
      {required && requiredSign}
      {isRightIconVisible && icon}
    </StyledLabel>
  );
};

export default ChopLogicLabel;
