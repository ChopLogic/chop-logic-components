import { useId, useState } from 'react';

import { useDebounce } from '../use-debounce';

export const InteractiveDebounceDemo = ({
  delay: initialDelay,
}: {
  value: unknown;
  delay: number;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [delay, setDelay] = useState(initialDelay);
  const debouncedValue = useDebounce(inputValue, delay);
  const typeInputId = useId();
  const debounceInputId = useId();

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor={typeInputId} style={{ display: 'block', marginBottom: '0.5rem' }}>
          <strong>Type here (watch the debounced value):</strong>
        </label>
        <input
          id={typeInputId}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Start typing..."
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
            maxWidth: '300px',
          }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor={debounceInputId} style={{ display: 'block', marginBottom: '0.5rem' }}>
          <strong>Debounce Delay (ms):</strong>
        </label>
        <input
          id={debounceInputId}
          type="range"
          min="0"
          max="2000"
          step="100"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          style={{ width: '100%', maxWidth: '300px' }}
        />
        <div style={{ fontSize: '0.875rem', color: '#666' }}>Current delay: {delay}ms</div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            padding: '1rem',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              fontSize: '0.875rem',
              color: '#666',
              marginBottom: '0.5rem',
            }}
          >
            Instant Value
          </div>
          <div style={{ fontWeight: 'bold', minHeight: '1.5rem' }}>{inputValue || '(empty)'}</div>
        </div>
        <div
          style={{
            padding: '1rem',
            border: '1px solid #2196f3',
            borderRadius: '4px',
            background: '#f3f9ff',
          }}
        >
          <div
            style={{
              fontSize: '0.875rem',
              color: '#2196f3',
              marginBottom: '0.5rem',
            }}
          >
            Debounced Value
          </div>
          <div
            style={{
              fontWeight: 'bold',
              minHeight: '1.5rem',
              color: '#2196f3',
            }}
          >
            {debouncedValue || '(empty)'}
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: '0.875rem',
          color: '#666',
          background: '#f5f5f5',
          padding: '0.75rem',
          borderRadius: '4px',
        }}
      >
        <strong>How it works:</strong> The debounced value updates {delay}ms after you stop typing.
        Try changing the delay and notice how it affects the responsiveness.
      </div>
    </div>
  );
};
