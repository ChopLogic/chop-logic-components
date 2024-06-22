import React, { useEffect } from 'react';

type useKeyPressParams = {
  keyCode: string;
  ref: React.RefObject<HTMLDivElement>;
  onKeyPress: () => void;
};

/**
 * Hook that listens for a specific key press event and triggers an action when the key is pressed.
 *
 * @param {Object} params - An object containing the following properties:
 *   - ref: A ref object that refers to the HTML element to attach the event listener to.
 *   - keyCode: The key code of the key to listen for.
 *   - onKeyPress: A function to be called when the key is pressed.
 * @return {void} This hook does not return anything.
 */

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
