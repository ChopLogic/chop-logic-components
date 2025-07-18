import { default as React, PropsWithChildren } from '../../../../node_modules/react';
import { ChopLogicOrientationMode } from '../../../enums';
import { ChopLogicMenuItem } from '../../../models';
type Props = PropsWithChildren & {
    item: ChopLogicMenuItem;
    mode: ChopLogicOrientationMode;
    openedOn?: 'hover' | 'click';
};
export declare const MenuItem: React.FC<Props>;
export {};
