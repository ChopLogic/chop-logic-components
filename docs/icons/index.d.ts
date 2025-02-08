import { default as React } from '../../node_modules/react';
import { ChopLogicIconName } from '../enums';
type LazyIcon = React.LazyExoticComponent<(props: React.SVGProps<SVGSVGElement>) => React.ReactElement>;
type ChopLogicLazyIcons = {
    [key in ChopLogicIconName]: LazyIcon;
};
export declare const ChopLogicIconDictionary: ChopLogicLazyIcons;
export {};
