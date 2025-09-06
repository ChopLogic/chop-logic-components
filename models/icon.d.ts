import { ChopLogicIconName } from '../enums';
import { HTMLAttributes, SVGProps } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export interface ChopLogicIconProps extends ChopLogicComponentProps, HTMLAttributes<SVGSVGElement> {
    name?: ChopLogicIconName;
    testId?: string;
    title?: string;
}
export interface ChopLogicSVGElementProps extends SVGProps<SVGSVGElement> {
    title?: string;
}
