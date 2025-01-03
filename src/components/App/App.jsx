import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import { location, APIkey } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "City",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const openAddGarmentModal = () => {
    setActiveModal("add-garment");
  };
  const openCardPreviewModal = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getWeather(location, APIkey)
      .then((data) => {
        setWeatherData(processWeatherData(data));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app__content">
          <Header
            onAddButtonClick={openAddGarmentModal}
            city={weatherData.city}
          />
          <Main
            weatherData={weatherData}
            onCardClicked={openCardPreviewModal}
          />
          <Footer />
        </div>
        <ModalWithForm
          title="New garment"
          submit="Add garment"
          isOpen={activeModal === "add-garment"}
          onCloseButtonClick={closeActiveModal}
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
              <input
                name="weather-type"
                id="hot"
                className="modal__radio"
                type="radio"
              />
              Hot
            </label>
            <label htmlFor="warm" className="modal__label">
              <input
                name="weather-type"
                id="warm"
                className="modal__radio"
                type="radio"
              />
              Warm
            </label>
            <label htmlFor="cold" className="modal__label">
              <input
                name="weather-type"
                id="cold"
                className="modal__radio"
                type="radio"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          onCloseButtonClick={closeActiveModal}
          isOpen={activeModal === "preview"}
          selectedCard={selectedCard}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
