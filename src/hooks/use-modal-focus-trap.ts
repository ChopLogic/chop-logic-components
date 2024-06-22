import { useEffect } from 'react';

type ModalFocusTrapParams = {
  modalRef: React.RefObject<HTMLDivElement>;
  isOpened: boolean;
};

/**
 * Traps the focus within a modal element when it is opened.
 *
 * @param {ModalFocusTrapParams} params - An object containing the modal reference and a boolean indicating whether the modal is opened.
 * @param {React.RefObject<HTMLDivElement>} params.modalRef - A reference to the modal element.
 * @param {boolean} params.isOpened - A boolean indicating whether the modal is opened.
 * @return {void} This function does not return anything.
 */

export const useModalFocusTrap = ({ modalRef, isOpened }: ModalFocusTrapParams) => {
  useEffect(() => {
    const modalElement = modalRef.current;
    if (!isOpened || !modalElement) return;

    const focusableElements = modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    modalElement.addEventListener('keydown', handleTabKeyPress);

    return () => {
      modalElement.removeEventListener('keydown', handleTabKeyPress);
    };
  }, [modalRef, isOpened]);
};
