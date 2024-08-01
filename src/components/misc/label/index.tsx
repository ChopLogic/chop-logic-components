import React, { PropsWithChildren } from 'react';
import { COLORS, FONTS, UNITS } from 'constants/style-variables';
import styled from 'styled-components';
import createClassName from 'utils/create-class-name';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  className?: string;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
};

const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-family: ${FONTS.core};
  display: flex;
  align-items: center;
  gap: ${UNITS.smallGap};
  color: ${COLORS.primary};
`;

const StyledLabelText = styled.span`
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledRequiredSign = styled.abbr`
  font-size: 0.8rem;
  font-family: ${FONTS.core};
  text-decoration: none;
  color: ${COLORS.accent};
  cursor: pointer;
`;

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
  const requiredSign = (
    <StyledRequiredSign title='required' className='cl-label__required'>
      *
    </StyledRequiredSign>
  );

  return (
    <StyledLabel htmlFor={inputId} className={createClassName(['cl-label', className])}>
      {isLeftIconVisible && icon}
      {!isTextHidden && <StyledLabelText className='cl-label__text'>{label}</StyledLabelText>}
      {required && requiredSign}
      {isRightIconVisible && icon}
    </StyledLabel>
  );
};

export default ChopLogicLabel;
