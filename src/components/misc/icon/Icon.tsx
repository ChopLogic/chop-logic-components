import React from 'react';

import ArrowDownIcon from './elements/ArrowDown';
import ArrowUpIcon from './elements/ArrowUp';
import BackIcon from './elements/Back';
import CancelIcon from './elements/Cancel';
import CheckboxCheckedIcon from './elements/CheckboxChecked';
import CheckboxUncheckedIcon from './elements/CheckboxUnchecked';
import CheckMarkIcon from './elements/CheckMark';
import ChevronDownIcon from './elements/ChevronDown';
import ChevronLeftIcon from './elements/ChevronLeft';
import ChevronRightIcon from './elements/ChevronRight';
import ChevronUpIcon from './elements/ChevronUp';
import ClearIcon from './elements/Clear';
import CopyIcon from './elements/Copy';
import CutIcon from './elements/Cut';
import DeleteIcon from './elements/Delete';
import DownloadIcon from './elements/Download';
import ErrorIcon from './elements/Error';
import ForwardIcon from './elements/Forward';
import HelpIcon from './elements/Help';
import HideIcon from './elements/Hide';
import InfoIcon from './elements/Info';
import PasteIcon from './elements/Paste';
import QuestionIcon from './elements/Question';
import RemoveIcon from './elements/Remove';
import SaveIcon from './elements/Save';
import ShowIcon from './elements/Show';
import UploadIcon from './elements/Upload';
import WarningIcon from './elements/Warning';

export enum ChopLogicIconName {
  ArrowDown = 'arrow-down',
  ArrowUp = 'arrow-up',
  Back = 'back',
  Cancel = 'cancel',
  CheckboxChecked = 'checkbox-checked',
  CheckboxUnchecked = 'checkbox-unchecked',
  CheckMark = 'check-mark',
  ChevronDown = 'chevron-down',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  ChevronUp = 'chevron-up',
  Clear = 'clear',
  Copy = 'copy',
  Cut = 'cut',
  Delete = 'delete',
  Download = 'download',
  Error = 'error',
  Forward = 'forward',
  Help = 'help',
  Hide = 'hide',
  Info = 'info',
  Paste = 'paste',
  Question = 'question',
  Save = 'save',
  Show = 'show',
  Upload = 'upload',
  Warning = 'warning',
  Remove = 'remove',
}

const ChopLogicIcon: React.FC<{ name?: ChopLogicIconName }> = ({ name }): React.ReactElement | null => {
  switch (name) {
    case ChopLogicIconName.ArrowDown:
      return <ArrowDownIcon />;
    case ChopLogicIconName.ArrowUp:
      return <ArrowUpIcon />;
    case ChopLogicIconName.Back:
      return <BackIcon />;
    case ChopLogicIconName.Cancel:
      return <CancelIcon />;
    case ChopLogicIconName.CheckboxChecked:
      return <CheckboxCheckedIcon />;
    case ChopLogicIconName.CheckboxUnchecked:
      return <CheckboxUncheckedIcon />;
    case ChopLogicIconName.CheckMark:
      return <CheckMarkIcon />;
    case ChopLogicIconName.ChevronDown:
      return <ChevronDownIcon />;
    case ChopLogicIconName.ChevronUp:
      return <ChevronUpIcon />;
    case ChopLogicIconName.ChevronLeft:
      return <ChevronLeftIcon />;
    case ChopLogicIconName.ChevronRight:
      return <ChevronRightIcon />;
    case ChopLogicIconName.Clear:
      return <ClearIcon />;
    case ChopLogicIconName.Copy:
      return <CopyIcon />;
    case ChopLogicIconName.Cut:
      return <CutIcon />;
    case ChopLogicIconName.Delete:
      return <DeleteIcon />;

    case ChopLogicIconName.Download:
      return <DownloadIcon />;
    case ChopLogicIconName.Error:
      return <ErrorIcon />;
    case ChopLogicIconName.Forward:
      return <ForwardIcon />;
    case ChopLogicIconName.Help:
      return <HelpIcon />;
    case ChopLogicIconName.Hide:
      return <HideIcon />;
    case ChopLogicIconName.Info:
      return <InfoIcon />;
    case ChopLogicIconName.Paste:
      return <PasteIcon />;
    case ChopLogicIconName.Question:
      return <QuestionIcon />;
    case ChopLogicIconName.Save:
      return <SaveIcon />;
    case ChopLogicIconName.Show:
      return <ShowIcon />;

    case ChopLogicIconName.Upload:
      return <UploadIcon />;
    case ChopLogicIconName.Warning:
      return <WarningIcon />;
    case ChopLogicIconName.Remove:
      return <RemoveIcon />;
    default:
      return null;
  }
};

export default ChopLogicIcon;
