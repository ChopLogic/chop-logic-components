import React from 'react';

import { ChopLogicIconName } from '@/enums';

import { CommonComponentProps } from './_common.ts';

export type ChopLogicIconProps = { name?: ChopLogicIconName } & CommonComponentProps;

type LazyIcon = React.LazyExoticComponent<(props: React.SVGProps<SVGSVGElement>) => React.ReactElement>;

export type ChopLogicLazyIcons = { [key in ChopLogicIconName]: LazyIcon };
