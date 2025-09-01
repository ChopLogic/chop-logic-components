import { ChopLogicComponentProps } from '@models';
import { FC, RefObject, useCallback } from 'react';

interface EditViewProps extends ChopLogicComponentProps {
  multiline: boolean;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  className: string;
  inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement | null>;
}

export const EditView: FC<EditViewProps> = ({
  multiline,
  value,
  placeholder,
  onChange,
  onBlur,
  onKeyDown,
  className,
  inputRef,
  ...rest
}) => {
  const InputComponent = multiline ? 'textarea' : 'input';

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <InputComponent
      ref={inputRef as any}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={className}
      rows={multiline ? 3 : undefined}
      {...rest}
    />
  );
};
