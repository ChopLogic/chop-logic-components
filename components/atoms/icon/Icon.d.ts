import { ElementSize, IconName } from '../../../enums';
import { ChopLogicComponentProps } from '../../../types';
import { FC } from '../../../../node_modules/react';
export interface IconProps extends ChopLogicComponentProps {
    name?: IconName;
    testId?: string;
    hidden?: boolean;
    size?: ElementSize;
}
declare const Icon: FC<IconProps>;
export default Icon;
