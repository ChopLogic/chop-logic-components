import type { FC } from 'react';

import { type WithErrorBoundaryProps, withErrorBoundary } from '../with-error-boundary';

type DemoChildProps = {
  label: string;
  simulateThrow?: boolean;
};

const DemoChild: FC<DemoChildProps> = ({ label, simulateThrow }) => {
  if (simulateThrow) {
    throw new Error('Simulated render error');
  }

  return <span>{label}</span>;
};

const DemoWithBoundary = withErrorBoundary(DemoChild);

export type WithErrorBoundaryExampleProps = DemoChildProps & WithErrorBoundaryProps;

export const WithErrorBoundaryExample: FC<WithErrorBoundaryExampleProps> = ({
  errorMessage,
  onError,
  simulateThrow = false,
  label,
}) => (
  <div style={{ padding: '2rem' }}>
    <DemoWithBoundary
      key={String(simulateThrow)}
      errorMessage={errorMessage}
      label={label}
      onError={onError}
      simulateThrow={simulateThrow}
    />
  </div>
);
