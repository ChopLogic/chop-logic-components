import React from 'react';
import { ChopLogicLoaderView } from '@enums';
import { ChopLogicLoaderProps } from '@models';

import Arrow from './styles/Arrow.module.scss';
import Brackets from './styles/Brackets.module.scss';
import Circle from './styles/Circle.module.scss';
import Dots from './styles/Dots.module.scss';
import Filler from './styles/Filler.module.scss';
import Linear from './styles/Linear.module.scss';
import Pulse from './styles/Pulse.module.scss';
import Rotation from './styles/Rotation.module.scss';
import Square from './styles/Square.module.scss';
import { getClassName } from '@utils';

const ChopLogicLoader: React.FC<ChopLogicLoaderProps> = ({ view, ...rest }) => {
  const className = getClassName([
    {
      [Arrow.loader]: view === ChopLogicLoaderView.Arrow,
      [Brackets.loader]: view === ChopLogicLoaderView.Brackets,
      [Circle.loader]: view === ChopLogicLoaderView.Circle,
      [Dots.loader]: view === ChopLogicLoaderView.Dots,
      [Filler.loader]: view === ChopLogicLoaderView.Filler,
      [Pulse.loader]: view === ChopLogicLoaderView.Pulse,
      [Linear.loader]: view === ChopLogicLoaderView.Linear,
      [Rotation.loader]: view === ChopLogicLoaderView.Rotation,
      [Square.loader]: view === ChopLogicLoaderView.Square,
    },
  ]);

  return <span className={className} {...rest}></span>;
};

export default ChopLogicLoader;
