import { ChopLogicOrientationMode } from '../../../../enums';
import { ChopLogicMenuItem } from '../../../../models';
import { FC, PropsWithChildren } from '../../../../../node_modules/react';
type Props = PropsWithChildren & {
    item: ChopLogicMenuItem;
    mode: ChopLogicOrientationMode;
    openedOn?: 'hover' | 'click';
};
export declare const MenuItem: FC<Props>;
export {};
