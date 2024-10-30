import { ChopLogicIconName } from '../../../../../../../../../../src/components/misc/icon/Icon';
import { default as React } from '../../../../../node_modules/react';

type ClearInputButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  icon: ChopLogicIconName;
};
declare const InputInnerButton: React.FC<ClearInputButtonProps>;
export default InputInnerButton;
