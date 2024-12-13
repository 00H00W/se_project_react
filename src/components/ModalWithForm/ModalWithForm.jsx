import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.svg";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button className="modal__close" type="button">
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <form className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              id="name"
              type="text"
              className="modal__input"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              id="imageUrl"
              type="url"
              className="modal__input"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__label">
              <input id="hot" className="modal__radio" type="radio" />
              Hot
            </label>
            <label htmlFor="warm" className="modal__label">
              <input id="warm" className="modal__radio" type="radio" />
              Warm
            </label>
            <label htmlFor="cold" className="modal__label">
              <input id="cold" className="modal__radio" type="radio" />
              Cold
            </label>
          </fieldset>
          <button type="submit" className="modal__submit-button">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
