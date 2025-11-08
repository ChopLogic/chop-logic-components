import { IconName } from '@enums';
import type { ChopLogicSVGElementProps } from '@models';
import type { ReactElement } from 'react';

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
import ChopLogicIcon from './svg/ChopLogic';
import ClearIcon from './svg/ClearIcon';
import CopyIcon from './svg/CopyIcon';
import CutIcon from './svg/CutIcon';
import DeleteIcon from './svg/DeleteIcon';
import DocumentsIcon from './svg/Documents';
import DownloadIcon from './svg/DownloadIcon';
import EditIcon from './svg/EditIcon';
import EmailIcon from './svg/Email';
import ErrorIcon from './svg/ErrorIcon';
import ForwardIcon from './svg/ForwardIcon';
import GraduateIcon from './svg/GraduateIcon';
import HelpIcon from './svg/HelpIcon';
import HideIcon from './svg/HideIcon';
import HomeIcon from './svg/HomeIcon';
import ImageIcon from './svg/ImageIcon';
import InfoIcon from './svg/InfoIcon';
import LoginIcon from './svg/LoginIcon';
import PasteIcon from './svg/PasteIcon';
import PhoneIcon from './svg/Phone';
import PlusCircleIcon from './svg/PlusCircle';
import ProjectsIcon from './svg/Projects';
import QuestionIcon from './svg/QuestionIcon';
import RemoveIcon from './svg/RemoveIcon';
import SaveIcon from './svg/SaveIcon';
import SearchIcon from './svg/Search';
import SettingsIcon from './svg/Settings';
import ShowIcon from './svg/ShowIcon';
import UploadIcon from './svg/UploadIcon';
import WarningIcon from './svg/WarningIcon';

type Icons = {
  [key in IconName]: ({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) => ReactElement;
};

export const IconDictionary: Icons = {
  [IconName.ArrowDown]: ArrowDownIcon,
  [IconName.ArrowUp]: ArrowUpIcon,
  [IconName.Back]: BackIcon,
  [IconName.Cancel]: CancelIcon,
  [IconName.CheckboxChecked]: CheckboxCheckedIcon,
  [IconName.CheckboxUnchecked]: CheckboxUncheckedIcon,
  [IconName.CheckMark]: CheckMarkIcon,
  [IconName.ChevronDown]: ChevronDownIcon,
  [IconName.ChevronUp]: ChevronUpIcon,
  [IconName.ChevronLeft]: ChevronLeftIcon,
  [IconName.ChevronRight]: ChevronRightIcon,
  [IconName.ChopLogic]: ChopLogicIcon,
  [IconName.Clear]: ClearIcon,
  [IconName.Copy]: CopyIcon,
  [IconName.Cut]: CutIcon,
  [IconName.Delete]: DeleteIcon,
  [IconName.Documents]: DocumentsIcon,
  [IconName.Download]: DownloadIcon,
  [IconName.Edit]: EditIcon,
  [IconName.Email]: EmailIcon,
  [IconName.Error]: ErrorIcon,
  [IconName.Forward]: ForwardIcon,
  [IconName.Graduate]: GraduateIcon,
  [IconName.Help]: HelpIcon,
  [IconName.Hide]: HideIcon,
  [IconName.Home]: HomeIcon,
  [IconName.Image]: ImageIcon,
  [IconName.Info]: InfoIcon,
  [IconName.Login]: LoginIcon,
  [IconName.Paste]: PasteIcon,
  [IconName.Phone]: PhoneIcon,
  [IconName.PlusCircle]: PlusCircleIcon,
  [IconName.Projects]: ProjectsIcon,
  [IconName.Question]: QuestionIcon,
  [IconName.Save]: SaveIcon,
  [IconName.Search]: SearchIcon,
  [IconName.Settings]: SettingsIcon,
  [IconName.Show]: ShowIcon,
  [IconName.Upload]: UploadIcon,
  [IconName.Warning]: WarningIcon,
  [IconName.Remove]: RemoveIcon,
};
