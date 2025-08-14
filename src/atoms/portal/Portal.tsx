import { ReactElement, ReactPortal, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ChopLogicPortal = ({ children }: { children: ReactElement }): ReactPortal => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    // Append a new portal at the end of the body element on mount
    document.body.appendChild(container);

    // Remove the portal on unmount
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};

export default ChopLogicPortal;
