import { default as React } from '../../../../../node_modules/react';
import { ChopLogicIconName } from '../../../../../../../../../../src/components/misc/icon/Icon';

type ClearInputButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    icon: ChopLogicIconName;
};
declare const InputInnerButton: React.FC<ClearInputButtonProps>;
export default InputInnerButton;
