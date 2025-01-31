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

const ChopLogicLoader: React.FC<ChopLogicLoaderProps> = ({ view }) => {
  switch (view) {
    case ChopLogicLoaderView.Bubble:
      return <StyledBubbleLoader></StyledBubbleLoader>;
    case ChopLogicLoaderView.Circle:
      return <StyledCircleLoader></StyledCircleLoader>;
    case ChopLogicLoaderView.Brackets:
      return <StyledBracketsLoader></StyledBracketsLoader>;
    case ChopLogicLoaderView.Linear:
      return <StyledLinearLoader></StyledLinearLoader>;
    case ChopLogicLoaderView.Pulse:
      return <StyledPulseLoader></StyledPulseLoader>;
    case ChopLogicLoaderView.Square:
      return <StyledSquareLoader></StyledSquareLoader>;
    default:
      return null;
  }
};

export default ChopLogicLoader;
