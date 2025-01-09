import React from 'react';
import { ChopLogicLabel } from '@elements';
import { useElementIds } from '@hooks';
import CheckboxCheckedIcon from '@icons/svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@icons/svg/CheckboxUncheckedIcon.tsx';
import { ChopLogicTheme } from '@models';

import { StyledGridCheckboxInput, StyledGridCheckboxWrapper } from '../Grid.styled';

type ChopLogicGridCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  theme: ChopLogicTheme;
};

const GridCheckbox: React.FC<ChopLogicGridCheckboxProps> = ({
  name,
  label,
  disabled,
  required = false,
  onChange,
  checked = false,
  theme,
  ...props
}) => {
  const { elementId } = useElementIds(props?.id);

  return (
    <StyledGridCheckboxWrapper $disabled={!!disabled} $checked={checked} $theme={theme}>
      <StyledGridCheckboxInput
        id={elementId}
        name={name}
        type='checkbox'
        disabled={disabled}
        required={required}
        checked={checked}
        onChange={onChange}
        $theme={theme}
      />
      <ChopLogicLabel
        label={label}
        required={required}
        inputId={elementId}
        isTextHidden={true}
        iconPosition='left'
        theme={theme}
        icon={checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      />
    </StyledGridCheckboxWrapper>
  );
};

export default GridCheckbox;
