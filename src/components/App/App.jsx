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
import * as api from "../../utils/api";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    avatar: "",
    email: "",
    name: "",
    token: "",
  });

  useEffect(() => {
    api.getItems().then(setClothingItems).catch(console.error);
  }, []);

  const openAddGarmentModal = () => {
    setActiveModal("add-garment");
  };
  const openCardPreviewModal = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const openRegisterModal = () => {
    setActiveModal("register");
  };
  const openLoginModal = () => {
    setActiveModal("login");
  };
  const openEditModal = () => {
    setActiveModal("edit-profile");
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
    api
      .postItem(item, currentUser.token)
      .then((res) => {
        closeActiveModal();
        setClothingItems([res, ...clothingItems]);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };
  const handleDeleteItem = () => {
    setLoading(true);
    api
      .removeItem(selectedCard._id, currentUser.token)
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

  // TODO: clean up registration/authorization/token methods
  const handleRegistration = (data) => {
    setLoading(true);
    auth
      .signup(data)
      .then((response) => {
        return handleAuthorization(data);
      })
      .catch(console.error)
      .finally(setLoading(false));
  };
  const handleAuthorization = (data) => {
    setLoading(true);
    return auth
      .signin(data)
      .then((response) => {
        if (response.token) {
          localStorage.setItem("jwt", response.token);
          closeActiveModal();
          setIsLoggedIn(true);
          return auth.getUserData(response.token).then((data) => {
            setCurrentUser({ ...data, token: response.token });
          });
        }
      })
      .catch(console.error)
      .finally(setLoading(false));
  };
  const handleEditProfile = (data) => {
    setLoading(true);
    return api
      .updateUser(data, currentUser.token)
      .then((response) => {
        setCurrentUser({ ...response.data, token: currentUser.token });
        closeActiveModal();
      })
      .catch(console.error)
      .finally(setLoading(false));
  };
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({
      avatar: "",
      email: "",
      name: "",
      token: "",
    });
  };

  const handleCardLike = ({ _id, likes }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !likes.includes(currentUser._id)
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeather(location, APIkey)
      .then((data) => {
        setWeatherData(processWeatherData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .getUserData(token)
        .then((response) => {
          if (response && response.name) {
            setCurrentUser({ ...response, token: token });
            setIsLoggedIn(true);
          }
        })
        .catch(console.error);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="app__content">
            <Header
              onAddButtonClick={openAddGarmentModal}
              onSignUpButtonClick={openRegisterModal}
              onLogInButtonClick={openLoginModal}
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
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      onAddButtonClick={openAddGarmentModal}
                      onCardClicked={openCardPreviewModal}
                      onCardLike={handleCardLike}
                      onEditProfile={openEditModal}
                      onLogOut={handleLogOut}
                    />
                  </ProtectedRoute>
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
          <RegisterModal
            isOpen={activeModal === "register"}
            closeActiveModal={closeActiveModal}
            isLoading={loading}
            openLoginModal={openLoginModal}
            handleRegistration={handleRegistration}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            closeActiveModal={closeActiveModal}
            isLoading={loading}
            openRegisterModal={openRegisterModal}
            handleAuthorization={handleAuthorization}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            closeActiveModal={closeActiveModal}
            isLoading={loading}
            onSubmit={handleEditProfile}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
