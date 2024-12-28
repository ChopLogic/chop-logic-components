import React from 'react';

import { ChopLogicButtonProps } from '@/models';

import Button from '../Button';

const ExampleButton: React.FC<ChopLogicButtonProps> = (props) => {
  return <Button {...props} />;
};

export default ExampleButton;
