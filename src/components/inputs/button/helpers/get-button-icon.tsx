import CancelIcon from 'assets/icons/Cancel';
import CheckMarkIcon from 'assets/icons/CheckMark';
import CopyIcon from 'assets/icons/Copy';
import DeleteIcon from 'assets/icons/Delete';

import { ChopLogicButtonIcon } from '../types';

export function getButtonIcon(icon?: ChopLogicButtonIcon): React.ReactElement | null {
  switch (icon) {
    case 'confirm':
      return <CheckMarkIcon />;
    case 'cancel':
      return <CancelIcon />;
    case 'delete':
      return <DeleteIcon />;
    case 'copy':
      return <CopyIcon />;
    default:
      return null;
  }
}
