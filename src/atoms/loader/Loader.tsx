import React from 'react';
import { ChopLogicLoaderView } from '@enums';
import { ChopLogicLoaderProps } from '@models';
import Arrow from './views/Arrow.module.scss';
import Brackets from './views/Brackets.module.scss';
import Circle from './views/Circle.module.scss';
import Dots from './views/Dots.module.scss';
import Filler from './views/Filler.module.scss';
import Linear from './views/Linear.module.scss';
import Pulse from './views/Pulse.module.scss';
import Rotation from './views/Rotation.module.scss';
import Square from './views/Square.module.scss';
import { getClassName } from '@utils';

const ChopLogicLoader: React.FC<ChopLogicLoaderProps> = ({ view = ChopLogicLoaderView.Circle, ...rest }) => {
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

  return <span className={className} role='status' {...rest}></span>;
};

export default ChopLogicLoader;
