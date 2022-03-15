import React, { useEffect } from 'react';

const Modal = () => {
  useEffect(() => {
    const { body } = document;
    body.style.overflow = 'hidden';
  }, []);

  return (
    <aside className="modal">
      <section className="modal__container">MODAL</section>
    </aside>
  );
};

export default Modal;
