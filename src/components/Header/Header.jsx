import "./Header.css";
import logoImg from "../../assets/logo.svg";
import avatarImg from "../../assets/avatar.svg";
import React from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink, Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  onAddButtonClick,
  onSignUpButtonClick,
  onLogInButtonClick,
  city,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [checked, setChecked] = React.useState(false);
  const userData = React.useContext(CurrentUserContext);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <header className="header">
      <NavLink to={"/"}>
        <img className="header__logo" src={logoImg} alt="WTWR Logo" />
      </NavLink>

      <p className="header__info">
        {currentDate}, {city}
      </p>
      <ToggleSwitch checked={checked} onChange={handleChange} />
      <button
        onClick={onAddButtonClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      {userData.token ? (
        <NavLink to={"/profile"} className="header__user-container">
          <p className="header__username">{userData.name}</p>
          {userData.avatar ? (
            <img
              className="header__avatar"
              src={userData.avatar}
              alt={userData.name}
            />
          ) : (
            <div className="header__avatar">
              <p className="header__avatar-text">
                {userData.name.substring(0, 1).toUpperCase()}
              </p>
            </div>
          )}
        </NavLink>
      ) : (
        <>
          <button
            onClick={onSignUpButtonClick}
            type="button"
            className="header__add-clothes-button"
          >
            Sign Up
          </button>
          <button
            onClick={onLogInButtonClick}
            type="button"
            className="header__add-clothes-button"
          >
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
