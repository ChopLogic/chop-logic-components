import { default as React } from '../../../node_modules/react';
import { ChopLogicIconName } from '../../enums';
import { ChopLogicTheme } from '../../models';

type ClearInputButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    icon: ChopLogicIconName;
    disabled?: boolean;
    theme: ChopLogicTheme;
};
declare const InputInnerButton: React.FC<ClearInputButtonProps>;
export default InputInnerButton;
