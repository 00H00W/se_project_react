import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.svg";

function ModalWithForm({
  children,
  title,
  submit,
  isOpen,
  onCloseButtonClick,
}) {
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
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit-button">
            {submit}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
