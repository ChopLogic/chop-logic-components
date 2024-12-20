import React from 'react';

import { ChopLogicIconName } from '@/enums';
import ArrowDownIcon from '@/icons/ArrowDownIcon';
import ArrowUpIcon from '@/icons/ArrowUpIcon';
import BackIcon from '@/icons/BackIcon';
import CancelIcon from '@/icons/CancelIcon';
import CheckboxCheckedIcon from '@/icons/CheckboxCheckedIcon';
import CheckboxUncheckedIcon from '@/icons/CheckboxUncheckedIcon';
import CheckMarkIcon from '@/icons/CheckMarkIcon';
import ChevronDownIcon from '@/icons/ChevronDownIcon';
import ChevronLeftIcon from '@/icons/ChevronLeftIcon';
import ChevronRightIcon from '@/icons/ChevronRightIcon';
import ChevronUpIcon from '@/icons/ChevronUpIcon';
import ClearIcon from '@/icons/ClearIcon';
import CopyIcon from '@/icons/CopyIcon';
import CutIcon from '@/icons/CutIcon';
import DeleteIcon from '@/icons/DeleteIcon';
import DownloadIcon from '@/icons/DownloadIcon';
import ErrorIcon from '@/icons/ErrorIcon';
import ForwardIcon from '@/icons/ForwardIcon';
import HelpIcon from '@/icons/HelpIcon';
import HideIcon from '@/icons/HideIcon';
import InfoIcon from '@/icons/InfoIcon';
import PasteIcon from '@/icons/PasteIcon';
import QuestionIcon from '@/icons/QuestionIcon';
import RemoveIcon from '@/icons/RemoveIcon';
import SaveIcon from '@/icons/SaveIcon';
import ShowIcon from '@/icons/ShowIcon';
import UploadIcon from '@/icons/UploadIcon';
import WarningIcon from '@/icons/WarningIcon';

type ChopLogicIconDictionary = {
  [key in ChopLogicIconName]: React.ReactElement;
};

export const dictionary: ChopLogicIconDictionary = {
  [ChopLogicIconName.ArrowDown]: <ArrowDownIcon />,
  [ChopLogicIconName.ArrowUp]: <ArrowUpIcon />,
  [ChopLogicIconName.Back]: <BackIcon />,
  [ChopLogicIconName.Cancel]: <CancelIcon />,
  [ChopLogicIconName.CheckboxChecked]: <CheckboxCheckedIcon />,
  [ChopLogicIconName.CheckboxUnchecked]: <CheckboxUncheckedIcon />,
  [ChopLogicIconName.CheckMark]: <CheckMarkIcon />,
  [ChopLogicIconName.ChevronDown]: <ChevronDownIcon />,
  [ChopLogicIconName.ChevronUp]: <ChevronUpIcon />,
  [ChopLogicIconName.ChevronLeft]: <ChevronLeftIcon />,
  [ChopLogicIconName.ChevronRight]: <ChevronRightIcon />,
  [ChopLogicIconName.Clear]: <ClearIcon />,
  [ChopLogicIconName.Copy]: <CopyIcon />,
  [ChopLogicIconName.Cut]: <CutIcon />,
  [ChopLogicIconName.Delete]: <DeleteIcon />,
  [ChopLogicIconName.Download]: <DownloadIcon />,
  [ChopLogicIconName.Error]: <ErrorIcon />,
  [ChopLogicIconName.Forward]: <ForwardIcon />,
  [ChopLogicIconName.Help]: <HelpIcon />,
  [ChopLogicIconName.Hide]: <HideIcon />,
  [ChopLogicIconName.Info]: <InfoIcon />,
  [ChopLogicIconName.Paste]: <PasteIcon />,
  [ChopLogicIconName.Question]: <QuestionIcon />,
  [ChopLogicIconName.Save]: <SaveIcon />,
  [ChopLogicIconName.Show]: <ShowIcon />,
  [ChopLogicIconName.Upload]: <UploadIcon />,
  [ChopLogicIconName.Warning]: <WarningIcon />,
  [ChopLogicIconName.Remove]: <RemoveIcon />,
};

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
