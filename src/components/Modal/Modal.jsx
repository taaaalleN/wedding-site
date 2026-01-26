import styles from "./Modal.module.css";

import { useEffect, useRef } from "preact/hooks";

const Modal = ({ children, isOpen, onClose = null, hasCloseBtn = false, disableClose = false }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && disableClose) {
      e.preventDefault();
      return;
    }

    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} class={styles.modal}>
      {hasCloseBtn && (
        <button onClick={handleCloseModal} class={styles.modalCloseBtn}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Modal;
