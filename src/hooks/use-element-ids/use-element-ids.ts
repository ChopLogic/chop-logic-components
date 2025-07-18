import { useId } from 'react';

export function useElementIds(id?: string) {
  const randomId = useId();
  const elementId = id ?? randomId;
  const errorId = `${elementId}_error`;
  const dropdownId = `${elementId}_dropdown`;

  return {
    elementId,
    errorId,
    dropdownId,
  };
}
