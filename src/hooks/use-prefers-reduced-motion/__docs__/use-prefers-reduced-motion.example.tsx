import { useState } from 'react';

import { usePrefersReducedMotion } from '../use-prefers-reduced-motion';

export const ReducedMotionDemo = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div
        style={{
          padding: '1rem',
          marginBottom: '1.5rem',
          borderRadius: '4px',
          background: prefersReducedMotion ? '#fff3e0' : '#e8f5e9',
          border: `1px solid ${prefersReducedMotion ? '#ffb74d' : '#81c784'}`,
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Current System Preference:</div>
        <div
          style={{
            fontSize: '1.25rem',
            color: prefersReducedMotion ? '#e65100' : '#2e7d32',
          }}
        >
          {prefersReducedMotion ? '🚫 Reduced Motion Enabled' : '✓ Motion Allowed'}
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <button
          type="button"
          onClick={handleClick}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '4px',
            border: 'none',
            background: '#2196f3',
            color: 'white',
          }}
        >
          Trigger Animation
        </button>
      </div>

      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          transition: prefersReducedMotion ? 'none' : 'transform 0.3s ease',
          transform: isAnimating && !prefersReducedMotion ? 'scale(1.2) rotate(10deg)' : 'none',
          opacity: isAnimating && prefersReducedMotion ? 0.7 : 1,
        }}
      >
        {prefersReducedMotion ? 'Static' : 'Animated'}
      </div>

      <div
        style={{
          marginTop: '1.5rem',
          fontSize: '0.875rem',
          color: '#666',
          background: '#f5f5f5',
          padding: '0.75rem',
          borderRadius: '4px',
        }}
      >
        <strong>How to test:</strong> Toggle &quot;Reduce motion&quot; in your system accessibility
        settings.
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.25rem' }}>
          <li>
            <strong>macOS:</strong> System Settings → Accessibility → Display → Reduce motion
          </li>
          <li>
            <strong>Windows:</strong> Settings → Accessibility → Visual effects → Animation effects
          </li>
          <li>
            <strong>iOS:</strong> Settings → Accessibility → Motion → Reduce Motion
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ConditionalAnimationExample = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div style={{ padding: '1rem' }}>
      <button
        type="button"
        onClick={toggleVisibility}
        style={{
          padding: '0.5rem 1rem',
          marginBottom: '1rem',
          cursor: 'pointer',
          borderRadius: '4px',
          border: '1px solid #ccc',
          background: 'white',
        }}
      >
        Toggle Element
      </button>

      <div
        style={{
          overflow: 'hidden',
          transition: prefersReducedMotion ? 'none' : 'all 0.3s ease',
          maxHeight: isVisible ? '100px' : '0',
          opacity: isVisible ? 1 : 0,
          padding: isVisible ? '1rem' : '0 1rem',
          background: '#e3f2fd',
          borderRadius: '4px',
        }}
      >
        <p style={{ margin: 0 }}>
          This element {prefersReducedMotion ? 'appears instantly' : 'animates smoothly'} based on
          your motion preference.
        </p>
      </div>

      <div
        style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: '#f5f5f5',
          borderRadius: '4px',
          fontSize: '0.875rem',
        }}
      >
        <code>prefersReducedMotion: {String(prefersReducedMotion)}</code>
      </div>
    </div>
  );
};
