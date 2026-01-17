import { Button } from '@components/atoms';
import { ButtonView, IconName } from '@enums';

import type { FC } from 'react';

const TextInputButtons: FC<{
  clearable: boolean;
  isPasswordButtonVisible: boolean;
  handleClear: () => void;
  togglePassword: () => void;
  passwordShown: boolean;
  label: string;
  disabled: boolean;
}> = ({
  clearable,
  isPasswordButtonVisible,
  handleClear,
  togglePassword,
  passwordShown,
  label,
  disabled,
}) => {
  return (
    <span>
      {clearable && (
        <Button
          view={ButtonView.Inner}
          onClick={handleClear}
          label={`Clear input for ${label}`}
          icon={IconName.Remove}
          disabled={disabled}
        />
      )}
      {isPasswordButtonVisible && (
        <Button
          onClick={togglePassword}
          view={ButtonView.Inner}
          label="Toggle password visibility"
          icon={passwordShown ? IconName.Hide : IconName.Show}
          disabled={disabled}
        />
      )}
    </span>
  );
};

export default TextInputButtons;
