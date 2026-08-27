import { FormContext } from '@components/contexts';
import { useContext } from 'react';

export const useFormLoading = (explicitProp?: boolean): boolean => {
  const { isLoading: contextLoading } = useContext(FormContext);

  if (explicitProp !== undefined) {
    return explicitProp;
  }

  return contextLoading ?? false;
};
