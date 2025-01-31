import React from 'react';
import { ChopLogicLoaderView } from '@enums';
import { ChopLogicLoaderProps } from '@models';

import {
  StyledBracketsLoader,
  StyledBubbleLoader,
  StyledCircleLoader,
  StyledLinearLoader,
  StyledPulseLoader,
  StyledSquareLoader,
} from './Loader.styled.tsx';

const ChopLogicLoader: React.FC<ChopLogicLoaderProps> = ({ view, ...rest }) => {
  switch (view) {
    case ChopLogicLoaderView.Bubble:
      return <StyledBubbleLoader {...rest}></StyledBubbleLoader>;
    case ChopLogicLoaderView.Circle:
      return <StyledCircleLoader {...rest}></StyledCircleLoader>;
    case ChopLogicLoaderView.Brackets:
      return <StyledBracketsLoader {...rest}></StyledBracketsLoader>;
    case ChopLogicLoaderView.Linear:
      return <StyledLinearLoader {...rest}></StyledLinearLoader>;
    case ChopLogicLoaderView.Pulse:
      return <StyledPulseLoader {...rest}></StyledPulseLoader>;
    case ChopLogicLoaderView.Square:
      return <StyledSquareLoader {...rest}></StyledSquareLoader>;
    default:
      return null;
  }
};

export default ChopLogicLoader;
