import { useRef } from 'react';
import { useClickOutside } from '..';

const Example = () => {
  const ref = useRef(null);
  useClickOutside({
    ref,
    onClickOutsideHandler: () => alert('Clicked outside!'),
  });

  return <div ref={ref}>Click outside this box to trigger the handler.</div>;
};

export default Example;
