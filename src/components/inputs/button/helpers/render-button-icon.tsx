import BackIcon from 'assets/icons/Back';
import CancelIcon from 'assets/icons/Cancel';
import CheckMarkIcon from 'assets/icons/CheckMark';
import CopyIcon from 'assets/icons/Copy';
import CutIcon from 'assets/icons/Cut';
import DeleteIcon from 'assets/icons/Delete';
import DownloadIcon from 'assets/icons/Download';
import ErrorIcon from 'assets/icons/Error';
import ForwardIcon from 'assets/icons/Forward';
import HelpIcon from 'assets/icons/Help';
import InfoIcon from 'assets/icons/Info';
import PasteIcon from 'assets/icons/Paste';
import QuestionIcon from 'assets/icons/Question';
import SaveIcon from 'assets/icons/Save';
import UploadIcon from 'assets/icons/Upload';
import WarningIcon from 'assets/icons/Warning';

import { ChopLogicButtonIcon } from '../types';

export function renderButtonIcon(icon?: ChopLogicButtonIcon): React.ReactElement | null {
  switch (icon) {
    case 'confirm':
      return <CheckMarkIcon />;
    case 'cancel':
      return <CancelIcon />;
    case 'delete':
      return <DeleteIcon />;
    case 'copy':
      return <CopyIcon />;
    case 'back':
      return <BackIcon />;
    case 'cut':
      return <CutIcon />;
    case 'download':
      return <DownloadIcon />;
    case 'error':
      return <ErrorIcon />;
    case 'forward':
      return <ForwardIcon />;
    case 'help':
      return <HelpIcon />;
    case 'info':
      return <InfoIcon />;
    case 'paste':
      return <PasteIcon />;
    case 'question':
      return <QuestionIcon />;
    case 'save':
      return <SaveIcon />;
    case 'upload':
      return <UploadIcon />;
    case 'warning':
      return <WarningIcon />;
    default:
      return null;
  }
}
