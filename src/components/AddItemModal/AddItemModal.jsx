import React from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ closeActiveModal, isOpen, onAddItem }) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [weather, setWeather] = React.useState("hot");

  React.useEffect(() => {
    reset();
  }, [isOpen]);

  function reset() {
    setName("");
    setImage("");
    setWeather("hot");
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name: name, link: image, weather: weather });
    // reset();
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleImageChange(e) {
    setImage(e.target.value);
  }
  function handleWeatherChange(e) {
    setWeather(e.target.value);
  }

  return (
    <ModalWithForm
      title="New garment"
      submit="Add garment"
      isOpen={isOpen}
      onCloseButtonClick={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          id="name"
          type="text"
          className="modal__input"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          id="imageUrl"
          type="url"
          className="modal__input"
          placeholder="Image URL"
          value={image}
          onChange={handleImageChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label">
          <input
            name="weather-type"
            id="hot"
            className="modal__radio"
            type="radio"
            checked={"hot" === weather}
            value={"hot"}
            onChange={handleWeatherChange}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label">
          <input
            name="weather-type"
            id="warm"
            className="modal__radio"
            type="radio"
            checked={"warm" === weather}
            value={"warm"}
            onChange={handleWeatherChange}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label">
          <input
            name="weather-type"
            id="cold"
            className="modal__radio"
            type="radio"
            checked={"cold" === weather}
            value={"cold"}
            onChange={handleWeatherChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
