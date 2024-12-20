import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import { location, APIkey } from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "City",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const closeModals = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(location, APIkey)
      .then((data) => {
        setWeatherData(processWeatherData(data));
      })
      .catch(console.error);
  }, []);

  // this sets the entire page to use the background color
  {
    document.body.style = "background: #f3f3f3;";
  }

  return (
    <div className="app">
      <div className="app__content">
        <Header
          onAddButtonClick={() => {
            setActiveModal("add-garment");
          }}
          city={weatherData.city}
        />
        <Main
          weatherData={weatherData}
          onCardClicked={(card) => {
            setActiveModal("preview");
            setSelectedCard(card);
          }}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        submit="Add garment"
        activeModal={activeModal}
        onCloseButtonClick={closeModals}
      >
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
      <ItemModal
        onCloseButtonClick={(card) => {
          closeModals();
        }}
        activeModal={activeModal}
        selectedCard={selectedCard}
      />
    </div>
  );
}

export default App;
