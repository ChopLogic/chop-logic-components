import '@__docs__/styles/Container.css';
import { Checkbox } from '@components/molecules';
import { useId, useRef, useState } from 'react';
import { useIsHovered } from '../use-is-hovered';

export const InteractiveHoverDemo = ({ isMounted: initialIsMounted }: { isMounted: boolean }) => {
  const hoverElementRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(initialIsMounted);
  const isHovered = useIsHovered(hoverElementRef, isMounted);
  const toggleId = useId();

  return (
    <div style={{ padding: '1rem', border: 'none' }} className="container">
      <div
        ref={hoverElementRef}
        className="container"
        style={{
          padding: '2rem',
          borderRadius: '8px',
          background: isHovered ? 'var(--cl-secondary-background)' : 'transparent',
          transition: 'all 0.2s ease',
          textAlign: 'center',
          minHeight: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              width: '240px',
            }}
          >
            {isHovered ? 'Hovering!' : 'Hover over me'}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>
            Hover State: <strong>{isHovered ? 'true' : 'false'}</strong>
          </div>
        </div>
      </div>
      <Checkbox
        id={toggleId}
        label="Enable hover tracking"
        name={toggleId}
        onChange={(e) => setIsMounted(e.target.checked)}
        style={{ justifyContent: 'center' }}
        defaultChecked={isMounted}
      />
    </div>
  );
};
