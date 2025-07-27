import { ChopLogicIconName } from '../../enums';
import { ChopLogicSVGElementProps } from '../../models';
import { ReactElement } from '../../../node_modules/react';
type ChopLogicIcons = {
    [key in ChopLogicIconName]: ({ title, ...rest }: ChopLogicSVGElementProps) => ReactElement;
};
export declare const ChopLogicIconDictionary: ChopLogicIcons;
export {};
