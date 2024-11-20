import React, { PropsWithChildren } from 'react';

import { StyledLabel } from './Label.styled';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({
  label,
  required,
  inputId,
  icon,
  iconPosition,
  isTextHidden = false,
  style,
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';

  return (
    <StyledLabel htmlFor={inputId} style={style}>
      {isLeftIconVisible && icon}
      {!isTextHidden && <span>{label}</span>}
      {required && <abbr title='required'>*</abbr>}
      {isRightIconVisible && icon}
    </StyledLabel>
  );
};

export default ChopLogicLabel;
