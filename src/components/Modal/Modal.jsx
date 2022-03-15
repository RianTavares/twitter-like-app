/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import RenderTypeButtons from './components/RenderTypeButtons';

const Modal = (props) => {
  const {
    open,
    modalHeading,
    modalAriaLabel,
    onRequestSubmit,
    onSecondarySubmit,
    danger,
    primaryButtonText,
    secondaryButtonText,
  } = props;

  const freezeScroll = () => {
    const { body } = document;

    if (open) {
      body.style.overflow = 'hidden';
    }

    body.style.overflow = 'auto';
  };

  useEffect(() => {
    freezeScroll(open);
  }, [open]);

  return (
    <aside className={`modal${open ? ' modal--open' : ''}`}>
      <section className="modal__overlay">
        <section className="modal__container">
          <h1 className="modal__title">{modalHeading}</h1>
          <p className="modal__description">
            {modalAriaLabel}
          </p>
          <section className="modal__actions">
            <RenderTypeButtons
              onRequestSubmit={onRequestSubmit}
              onSecondarySubmit={onSecondarySubmit}
              danger={danger}
              primaryButtonText={primaryButtonText}
              secondaryButtonText={secondaryButtonText}
            />
          </section>
        </section>
      </section>
    </aside>
  );
};

export default Modal;
