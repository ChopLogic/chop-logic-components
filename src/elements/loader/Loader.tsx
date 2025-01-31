import React from 'react';
import { ChopLogicLoaderView } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicLoaderProps } from '@models';

import { StyledBracketsLoader } from './views/Brackets.styled.tsx';
import { StyledBubbleLoader } from './views/Bubble.styled.tsx';
import { StyledCircleLoader } from './views/Circle.styled.tsx';
import { StyledLinearLoader } from './views/Linear.styled.tsx';
import { StyledPulseLoader } from './views/Pulse.styled.tsx';
import { StyledSquareLoader } from './views/Square.styled.tsx';

const ChopLogicLoader: React.FC<ChopLogicLoaderProps> = ({ view, ...rest }) => {
  const theme = useChopLogicTheme();

  switch (view) {
    case ChopLogicLoaderView.Bubble:
      return <StyledBubbleLoader $theme={theme} {...rest}></StyledBubbleLoader>;
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
    default:
      return null;
  }
};

export default ChopLogicLoader;
