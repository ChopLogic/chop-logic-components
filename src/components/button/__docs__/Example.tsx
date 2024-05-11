import React from 'react';
import Button, { ChopLogicButtonProps } from '../Button';

const ExampleButton: React.FC<ChopLogicButtonProps> = ({ disabled, onClick, text, view, type, icon }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button text={text} disabled={disabled} view={view} onClick={onClick} type={type} icon={icon} />
    </div>
  );
};

export default ExampleButton;
