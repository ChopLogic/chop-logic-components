import '@__docs__/styles/Container.css';
import { useRef } from 'react';

import { useClickOutside } from '../use-click-outside';

export const UseClickOutsideExample = () => {
  const ref = useRef(null);
  useClickOutside({
    ref,
    onClickOutsideHandler: () => alert('Clicked outside!'),
  });

  return (
    <div className="container" ref={ref}>
      Click outside this box to trigger the handler.
    </div>
  );
};
