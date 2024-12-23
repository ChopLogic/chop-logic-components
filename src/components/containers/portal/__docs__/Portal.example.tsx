import React from 'react';

import { ChopLogicPortal } from '@/components';

const PortalExample: React.FC<React.PropsWithChildren> = (props) => (
  <ChopLogicPortal>
    <div style={{ background: 'lightblue', padding: '20px', border: '1px solid blue' }}>{props.children}</div>
  </ChopLogicPortal>
);

export default PortalExample;
