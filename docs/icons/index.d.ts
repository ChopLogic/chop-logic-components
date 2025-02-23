import { default as React } from '../../node_modules/react';
import { ChopLogicIconName } from '../enums';

type LazyIcon = React.LazyExoticComponent<({ title, ...rest }: ChopLogicSVGElementProps) => React.ReactElement>;
type ChopLogicLazyIcons = {
  [key in ChopLogicIconName]: LazyIcon;
};
export declare const ChopLogicIconDictionary: ChopLogicLazyIcons;
export {};
