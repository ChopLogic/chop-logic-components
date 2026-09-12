import type { SelectValue } from '@types';
import type { KeyboardEvent } from 'react';

import { handleListKeyNavigation } from './handle-list-key-navigation';

export function handleDropdownListKeyPress({
  e,
  options,
  onClose,
}: {
  e: KeyboardEvent<HTMLUListElement>;
  options: SelectValue[];
  onClose: () => void;
}) {
  handleListKeyNavigation({
    event: e,
    items: options,
    orientation: 'vertical',
    onClose,
  });
}
