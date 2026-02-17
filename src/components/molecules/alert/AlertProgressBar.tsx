import type { FC } from 'react';

export const AlertProgressBar: FC<{ remainingPercentage: number }> = ({ remainingPercentage }) => {
  return (
    <progress
      className="cl-alert__progress-bar"
      value={remainingPercentage}
      max={100}
      style={{ width: '100%' }}
    />
  );
};
