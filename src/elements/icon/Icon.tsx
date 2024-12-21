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

export const ChopLogicIconDictionary: {
  [key in ChopLogicIconName]: React.ReactElement;
} = {
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
  if (!name) return null;

  return ChopLogicIconDictionary[name];
};

export default ChopLogicIcon;
