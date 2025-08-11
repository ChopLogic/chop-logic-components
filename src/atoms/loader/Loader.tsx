import { LoaderView } from '@enums';
import { ChopLogicLoaderProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import Arrow from './views/Arrow.module.scss';
import Brackets from './views/Brackets.module.scss';
import Circle from './views/Circle.module.scss';
import Dots from './views/Dots.module.scss';
import Filler from './views/Filler.module.scss';
import Linear from './views/Linear.module.scss';
import Pulse from './views/Pulse.module.scss';
import Rotation from './views/Rotation.module.scss';
import Square from './views/Square.module.scss';

const ChopLogicLoader: FC<ChopLogicLoaderProps> = ({ view = LoaderView.Circle, ...rest }) => {
  const className = getClassName([
    {
      [Arrow.loader]: view === LoaderView.Arrow,
      [Brackets.loader]: view === LoaderView.Brackets,
      [Circle.loader]: view === LoaderView.Circle,
      [Dots.loader]: view === LoaderView.Dots,
      [Filler.loader]: view === LoaderView.Filler,
      [Pulse.loader]: view === LoaderView.Pulse,
      [Linear.loader]: view === LoaderView.Linear,
      [Rotation.loader]: view === LoaderView.Rotation,
      [Square.loader]: view === LoaderView.Square,
    },
  ]);

  return <span className={className} role='status' {...rest}></span>;
};

export default ChopLogicLoader;
