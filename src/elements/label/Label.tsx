import React, { PropsWithChildren } from 'react';

import { ChopLogicTheme } from '@/models';

import { StyledLabel } from './Label.styled';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  theme: ChopLogicTheme;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({
  label,
  required,
  inputId,
  theme,
  icon,
  iconPosition,
  isTextHidden = false,
  style,
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';

  return (
    <StyledLabel htmlFor={inputId} style={style} $theme={theme}>
      {isLeftIconVisible && icon}
      {!isTextHidden && (
        <span>
          {label}
          {required && <abbr title='required'>*</abbr>}
        </span>
      )}
      {isRightIconVisible && icon}
    </StyledLabel>
  );
};

export default ChopLogicLabel;
