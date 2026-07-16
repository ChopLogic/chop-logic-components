import { FormContext } from '@components/contexts';
import { useContext } from 'react';

export const useFormPending = (): boolean => {
  const { isPending } = useContext(FormContext);
  return isPending ?? false;
};
