import { Button } from '@components/atoms';
import styles from '@styles/storybook/Container.module.scss';
import { useId, useState } from 'react';
import { useRemainingTimer } from '../use-remaining-timer';

export const InteractiveRemainingTimerDemo = ({
  autoCloseDelay: initialAutoCloseDelay,
}: {
  autoCloseDelay: number;
}) => {
  const [alerts, setAlerts] = useState<{ id: string; hoveredId: string | null }>({
    id: '0',
    hoveredId: null,
  });
  const [autoCloseDelay, setAutoCloseDelay] = useState(initialAutoCloseDelay);
  const delayInputId = useId();

  const remainingPercentage = useRemainingTimer({
    isOpened: !!alerts.id,
    isHovered: alerts.hoveredId === alerts.id,
    onClose: () => setAlerts({ id: '', hoveredId: null }),
    autoCloseDelay,
  });

  const openAlert = () => {
    setAlerts({ id: Date.now().toString(), hoveredId: null });
  };

  return (
    <div
      style={{ padding: '1rem', minWidth: '300px', gap: '1rem', border: 'none' }}
      className={styles.container}
    >
      <div>
        <label htmlFor={delayInputId} style={{ display: 'block', marginBottom: '0.5rem' }}>
          <strong>Auto-close delay (ms):</strong>
        </label>
        <input
          id={delayInputId}
          type="number"
          min="1000"
          max="10000"
          step="500"
          value={autoCloseDelay}
          onChange={(e) => setAutoCloseDelay(Number(e.target.value))}
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <Button onClick={openAlert} text="Open Alert" />

      {alerts.id && (
        <div
          onMouseEnter={() => setAlerts((prev) => ({ ...prev, hoveredId: prev.id }))}
          onMouseLeave={() => setAlerts((prev) => ({ ...prev, hoveredId: null }))}
          style={{
            padding: '1rem',
            border: 'var(--cl-accent-border)',
            borderRadius: '8px',
            background: 'transparent',
            marginBottom: '1rem',
            cursor: 'pointer',
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Alert Message</strong>
            <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' }}>
              {alerts.hoveredId === alerts.id ? '⏸️ Timer paused (hovering)' : '⏱️ Timer running'}
            </div>
          </div>
          <progress value={remainingPercentage} max={100} style={{ width: '100%' }} />
          <div
            style={{
              fontSize: '0.75rem',
              color: '#666',
              marginTop: '0.5rem',
              textAlign: 'right',
            }}
          >
            {remainingPercentage.toFixed(1)}% remaining
          </div>
        </div>
      )}
    </div>
  );
};
