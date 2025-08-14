import { RefObject, useEffect } from 'react';

type useKeyPressParams = {
  keyCode: string;
  ref: RefObject<HTMLDivElement | null>;
  onKeyPress: () => void;
};

export const useKeyPress = ({ ref, keyCode, onKeyPress }: useKeyPressParams) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e?.code === keyCode && ref?.current) {
        onKeyPress();
      }
    };

    document.addEventListener('keydown', handleKeyPress, false);
    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [ref, keyCode, onKeyPress]);
};
