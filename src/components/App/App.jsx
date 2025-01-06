import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import { location, APIkey, defaultClothingItems } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Profile from "../Profile/Profile";
import { Routes, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, postItem, removeItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "City",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getItems().then(setClothingItems).catch(console.error);
  }, []);

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
  const handleAddItemSubmit = (item) => {
    setLoading(true);
    postItem(item)
      .then((res) => {
        closeActiveModal();
        setClothingItems([{ ...item, _id: res._id }, ...clothingItems]);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };
  const handleDeleteItem = () => {
    setLoading(true);
    removeItem(selectedCard._id)
      .then(() => {
        closeActiveModal();
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
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
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  clothingItems={clothingItems}
                  weatherData={weatherData}
                  onCardClicked={openCardPreviewModal}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onAddButtonClick={openAddGarmentModal}
                  onCardClicked={openCardPreviewModal}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          closeActiveModal={closeActiveModal}
          onAddItem={handleAddItemSubmit}
          isLoading={loading}
        />
        <ItemModal
          onCloseButtonClick={closeActiveModal}
          isOpen={activeModal === "preview"}
          selectedCard={selectedCard}
          onDeleteCard={handleDeleteItem}
          isLoading={loading}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
