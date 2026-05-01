import { LoaderView } from '../enums';
import { HTMLAttributes } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export interface LoaderProps extends ChopLogicComponentProps, HTMLAttributes<HTMLSpanElement> {
    view?: LoaderView;
}
