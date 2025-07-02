import React from 'react';
import ChopLogicHeader from '../Header';
import { ChopLogicIconName } from '@enums';

const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'start',
};

export const HeaderExample: React.FC = () => {
  return (
    <div style={wrapperStyles}>
      <ChopLogicHeader>Default H1 Header</ChopLogicHeader>
      <ChopLogicHeader as='h2'>H2 Header</ChopLogicHeader>
      <ChopLogicHeader as='h3'>H3 Header</ChopLogicHeader>
      <ChopLogicHeader as='h4'>H4 Header</ChopLogicHeader>
      <ChopLogicHeader as='h5'>H5 Header</ChopLogicHeader>
      <ChopLogicHeader as='h6'>H6 Header</ChopLogicHeader>
      <ChopLogicHeader icon={ChopLogicIconName.Info} as='h6'>
        H6 Header with an icon
      </ChopLogicHeader>
    </div>
  );
};
