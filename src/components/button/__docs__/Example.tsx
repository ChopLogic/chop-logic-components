import React, { FC } from 'react';
import Button, { ChopLogicButtonProps } from '../Button';

const Example: FC<ChopLogicButtonProps> = ({ disabled = false, onClick = () => {}, text = 'Button' }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button text={text} disabled={disabled} onClick={onClick} />
    </div>
  );
};

export default Example;
