import { useState } from 'react';

import { useBodyScrollLock } from '../use-body-scroll-lock';

const containerStyles: React.CSSProperties = {
  padding: '16px',
  fontFamily: 'sans-serif',
};

const buttonStyles: React.CSSProperties = {
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
  marginBottom: '16px',
};

const statusStyles: React.CSSProperties = {
  padding: '8px 16px',
  borderRadius: '4px',
  marginBottom: '16px',
  display: 'inline-block',
};

const lockedStatusStyles: React.CSSProperties = {
  ...statusStyles,
  backgroundColor: '#fee2e2',
  color: '#991b1b',
};

const unlockedStatusStyles: React.CSSProperties = {
  ...statusStyles,
  backgroundColor: '#dcfce7',
  color: '#166534',
};

const contentStyles: React.CSSProperties = {
  lineHeight: '2',
  maxWidth: '600px',
};

export const UseBodyScrollLockExample = () => {
  const [isLocked, setIsLocked] = useState(false);

  useBodyScrollLock({ isLocked });

  return (
    <div style={containerStyles}>
      <button type="button" onClick={() => setIsLocked(!isLocked)} style={buttonStyles}>
        {isLocked ? 'Unlock Scroll' : 'Lock Scroll'}
      </button>

      <div style={isLocked ? lockedStatusStyles : unlockedStatusStyles}>
        Body scroll is currently: <strong>{isLocked ? 'LOCKED' : 'UNLOCKED'}</strong>
      </div>

      <div style={contentStyles}>
        <p>
          The <code>useBodyScrollLock</code> hook prevents the page from scrolling when active. This
          is useful for modal dialogs, full-screen menus, or any overlay that should capture user
          attention.
        </p>
        <p>
          Click the button above to toggle the scroll lock. When locked, you will not be able to
          scroll the page. Your scroll position will be preserved and restored when unlocked.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p>
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et
          commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
        </p>
        <p>
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
          Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros
          est euismod turpis, id tincidunt sapien risus a quam.
        </p>
        <p>
          Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis
          sapien sem, aliquet sed, vulputate eget, feugiat non, erat. Sed imperdiet, erat sed porta
          gravida, elit nulla placerat nisi.
        </p>
        <p>
          Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam
          mauris ut lacus. Fusce vel dui. Sed in libero ut nibh placerat accumsan.
        </p>
      </div>
    </div>
  );
};
