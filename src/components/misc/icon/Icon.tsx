import React from 'react';

import ArrowDownIcon from './elements/ArrowDown';
import ArrowUpIcon from './elements/ArrowUp';
import BackIcon from './elements/Back';
import CancelIcon from './elements/Cancel';
import CheckboxCheckedIcon from './elements/CheckboxChecked';
import CheckboxUncheckedIcon from './elements/CheckboxUnchecked';
import CheckMarkIcon from './elements/CheckMark';
import CopyIcon from './elements/Copy';
import CutIcon from './elements/Cut';
import DeleteIcon from './elements/Delete';
import DownloadIcon from './elements/Download';
import ErrorIcon from './elements/Error';
import ForwardIcon from './elements/Forward';
import HelpIcon from './elements/Help';
import InfoIcon from './elements/Info';
import PasteIcon from './elements/Paste';
import QuestionIcon from './elements/Question';
import SaveIcon from './elements/Save';
import UploadIcon from './elements/Upload';
import WarningIcon from './elements/Warning';

export enum CLIcon {
  ArrowDown = 'arrow-down',
  ArrowUp = 'arrow-up',
  Back = 'back',
  Cancel = 'cancel',
  CheckboxChecked = 'checkbox-checked',
  CheckboxUnchecked = 'checkbox-unchecked',
  CheckMark = 'check-mark',
  Copy = 'copy',
  Cut = 'cut',
  Delete = 'delete',
  Download = 'download',
  Error = 'error',
  Forward = 'forward',
  Help = 'help',
  Info = 'info',
  Paste = 'paste',
  Question = 'question',
  Save = 'save',
  Upload = 'upload',
  Warning = 'warning',
}

const ChopLogicIcon: React.FC<{ name?: CLIcon }> = ({ name }): React.ReactElement | null => {
  switch (name) {
    case CLIcon.ArrowDown:
      return <ArrowDownIcon />;
    case CLIcon.ArrowUp:
      return <ArrowUpIcon />;
    case CLIcon.Back:
      return <BackIcon />;
    case CLIcon.Cancel:
      return <CancelIcon />;
    case CLIcon.CheckboxChecked:
      return <CheckboxCheckedIcon />;
    case CLIcon.CheckboxUnchecked:
      return <CheckboxUncheckedIcon />;
    case CLIcon.CheckMark:
      return <CheckMarkIcon />;
    case CLIcon.Copy:
      return <CopyIcon />;
    case CLIcon.Cut:
      return <CutIcon />;
    case CLIcon.Delete:
      return <DeleteIcon />;
    case CLIcon.Download:
      return <DownloadIcon />;
    case CLIcon.Error:
      return <ErrorIcon />;
    case CLIcon.Forward:
      return <ForwardIcon />;
    case CLIcon.Help:
      return <HelpIcon />;
    case CLIcon.Info:
      return <InfoIcon />;
    case CLIcon.Paste:
      return <PasteIcon />;
    case CLIcon.Question:
      return <QuestionIcon />;
    case CLIcon.Save:
      return <SaveIcon />;
    case CLIcon.Upload:
      return <UploadIcon />;
    case CLIcon.Warning:
      return <WarningIcon />;
    default:
      return null;
  }
};

export default ChopLogicIcon;
