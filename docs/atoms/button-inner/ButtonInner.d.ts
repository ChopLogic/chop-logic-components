import { default as React } from '../../../node_modules/react';
import { ChopLogicIconName } from '../../enums';
type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
    icon: ChopLogicIconName;
    disabled?: boolean;
};
declare const ButtonInner: React.FC<Props>;
export default ButtonInner;
