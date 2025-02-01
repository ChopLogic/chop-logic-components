import React from 'react';
import { ChopLogicLoaderView } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicLoaderProps } from '@models';

import { StyledArrowLoader } from './views/Arrow.styled.tsx';
import { StyledBracketsLoader } from './views/Brackets.styled.tsx';
import { StyledCircleLoader } from './views/Circle.styled.tsx';
import { StyledDotsLoader } from './views/Dots.styled.tsx';
import { StyledFillerLoader } from './views/Filler.styled.tsx';
import { StyledLinearLoader } from './views/Linear.styled.tsx';
import { StyledPulseLoader } from './views/Pulse.styled.tsx';
import { StyledRotationLoader } from './views/Rotation.styled.tsx';
import { StyledSquareLoader } from './views/Square.styled.tsx';

const ChopLogicLoader: React.FC<ChopLogicLoaderProps> = ({ view, ...rest }) => {
  const theme = useChopLogicTheme();

  switch (view) {
    case ChopLogicLoaderView.Dots:
      return <StyledDotsLoader $theme={theme} {...rest}></StyledDotsLoader>;
    case ChopLogicLoaderView.Circle:
      return <StyledCircleLoader $theme={theme} {...rest}></StyledCircleLoader>;
    case ChopLogicLoaderView.Brackets:
      return <StyledBracketsLoader $theme={theme} {...rest}></StyledBracketsLoader>;
    case ChopLogicLoaderView.Linear:
      return <StyledLinearLoader $theme={theme} {...rest}></StyledLinearLoader>;
    case ChopLogicLoaderView.Pulse:
      return <StyledPulseLoader $theme={theme} {...rest}></StyledPulseLoader>;
    case ChopLogicLoaderView.Square:
      return <StyledSquareLoader $theme={theme} {...rest}></StyledSquareLoader>;
    case ChopLogicLoaderView.Arrow:
      return <StyledArrowLoader $theme={theme} {...rest}></StyledArrowLoader>;
    case ChopLogicLoaderView.Rotation:
      return <StyledRotationLoader $theme={theme} {...rest}></StyledRotationLoader>;
    case ChopLogicLoaderView.Filler:
      return <StyledFillerLoader $theme={theme} {...rest}></StyledFillerLoader>;
    default:
      return null;
  }
};

export default ChopLogicLoader;
