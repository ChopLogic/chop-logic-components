import { ChopLogicIconName } from '@enums';
import { ChopLogicSVGElementProps } from '@models';
import { ReactElement } from 'react';

import ArrowDownIcon from './svg/ArrowDownIcon';
import ArrowUpIcon from './svg/ArrowUpIcon';
import BackIcon from './svg/BackIcon';
import CancelIcon from './svg/CancelIcon';
import CheckboxCheckedIcon from './svg/CheckboxCheckedIcon';
import CheckboxUncheckedIcon from './svg/CheckboxUncheckedIcon';
import CheckMarkIcon from './svg/CheckMarkIcon';
import ChevronDownIcon from './svg/ChevronDownIcon';
import ChevronLeftIcon from './svg/ChevronLeftIcon';
import ChevronRightIcon from './svg/ChevronRightIcon';
import ChevronUpIcon from './svg/ChevronUpIcon';
import ClearIcon from './svg/ClearIcon';
import CopyIcon from './svg/CopyIcon';
import CutIcon from './svg/CutIcon';
import DeleteIcon from './svg/DeleteIcon';
import DownloadIcon from './svg/DownloadIcon';
import ErrorIcon from './svg/ErrorIcon';
import ForwardIcon from './svg/ForwardIcon';
import GraduateIcon from './svg/GraduateIcon';
import HelpIcon from './svg/HelpIcon';
import HideIcon from './svg/HideIcon';
import HomeIcon from './svg/HomeIcon';
import InfoIcon from './svg/InfoIcon';
import LoginIcon from './svg/LoginIcon';
import PasteIcon from './svg/PasteIcon';
import QuestionIcon from './svg/QuestionIcon';
import RemoveIcon from './svg/RemoveIcon';
import SaveIcon from './svg/SaveIcon';
import ShowIcon from './svg/ShowIcon';
import UploadIcon from './svg/UploadIcon';
import WarningIcon from './svg/WarningIcon';

type ChopLogicIcons = { [key in ChopLogicIconName]: ({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) => ReactElement };

export const ChopLogicIconDictionary: ChopLogicIcons = {
  [ChopLogicIconName.ArrowDown]: ArrowDownIcon,
  [ChopLogicIconName.ArrowUp]: ArrowUpIcon,
  [ChopLogicIconName.Back]: BackIcon,
  [ChopLogicIconName.Cancel]: CancelIcon,
  [ChopLogicIconName.CheckboxChecked]: CheckboxCheckedIcon,
  [ChopLogicIconName.CheckboxUnchecked]: CheckboxUncheckedIcon,
  [ChopLogicIconName.CheckMark]: CheckMarkIcon,
  [ChopLogicIconName.ChevronDown]: ChevronDownIcon,
  [ChopLogicIconName.ChevronUp]: ChevronUpIcon,
  [ChopLogicIconName.ChevronLeft]: ChevronLeftIcon,
  [ChopLogicIconName.ChevronRight]: ChevronRightIcon,
  [ChopLogicIconName.Clear]: ClearIcon,
  [ChopLogicIconName.Copy]: CopyIcon,
  [ChopLogicIconName.Cut]: CutIcon,
  [ChopLogicIconName.Delete]: DeleteIcon,
  [ChopLogicIconName.Download]: DownloadIcon,
  [ChopLogicIconName.Error]: ErrorIcon,
  [ChopLogicIconName.Forward]: ForwardIcon,
  [ChopLogicIconName.Graduate]: GraduateIcon,
  [ChopLogicIconName.Help]: HelpIcon,
  [ChopLogicIconName.Hide]: HideIcon,
  [ChopLogicIconName.Home]: HomeIcon,
  [ChopLogicIconName.Info]: InfoIcon,
  [ChopLogicIconName.Login]: LoginIcon,
  [ChopLogicIconName.Paste]: PasteIcon,
  [ChopLogicIconName.Question]: QuestionIcon,
  [ChopLogicIconName.Save]: SaveIcon,
  [ChopLogicIconName.Show]: ShowIcon,
  [ChopLogicIconName.Upload]: UploadIcon,
  [ChopLogicIconName.Warning]: WarningIcon,
  [ChopLogicIconName.Remove]: RemoveIcon,
};
