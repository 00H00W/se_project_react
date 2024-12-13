import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
      <ModalWithForm title="New garment" submit="Add garment">
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
      </ModalWithForm>
    </div>
  );
}

export default App;
