import "./ItemModal.css";
import closeIcon from "../../assets/close-icon.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";

function ItemModal({
  isOpen,
  selectedCard,
  onCloseButtonClick,
  onDeleteCard,
  isLoading,
}) {
  const userData = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === userData._id;

  return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onCloseButtonClick}
          className="modal__close"
          type="button"
        >
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__caption">
          <div>
            <h2 className="modal__caption-header">{selectedCard.name}</h2>
            <p className="modal__caption-weather">
              Weather: {selectedCard.weather}
            </p>
          </div>
          {isOwn && (
            <button
              disabled={isLoading}
              onClick={onDeleteCard}
              className="modal__delete-button"
            >
              {isLoading ? "Loading..." : "Delete item"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
