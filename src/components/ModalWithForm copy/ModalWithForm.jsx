import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.svg";
import React, { useEffect } from "react";

function ModalWithForm({
  children,
  title,
  submit,
  isOpen,
  onCloseButtonClick,
  onSubmit,
  isLoading,
  altSubmit = null,
  onAltSubmit,
}) {
  const [valid, setValidity] = React.useState("false");

  const checkFormValidity = (e) => {
    setValidity(e.currentTarget.checkValidity());
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onCloseButtonClick}
          className="modal__close"
          type="button"
        >
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <form
          className="modal__form"
          onChange={checkFormValidity}
          onSubmit={onSubmit}
        >
          {children}
          <div className="modal__submit-container">
            <button
              disabled={!valid || isLoading}
              type="submit"
              className="modal__submit-button"
            >
              {isLoading ? "Loading..." : submit}
            </button>
            {altSubmit !== null ? (
              <button
                className="modal__alt-submit-button"
                type="button"
                onClick={onAltSubmit}
              >
                {altSubmit}
              </button>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
