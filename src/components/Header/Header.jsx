import "./Header.css";
import logoImg from "../../assets/logo.svg";
import avatarImg from "../../assets/avatar.svg";
import React from "react";
import Toggle from "../Toggle/Toggle";
import { NavLink, Link } from "react-router-dom";

function Header({ onAddButtonClick, city }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [checked, setChecked] = React.useState(false);

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
      <Toggle checked={checked} onChange={handleChange} />
      <button
        onClick={onAddButtonClick}
        type="button"
        className="header__add-clothes-button"
      >
        + Add clothes
      </button>
      <NavLink to={"/profile"} className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          className="header__avatar"
          src={avatarImg}
          alt="Terrence Tegegne"
        />
      </NavLink>
    </header>
  );
}

export default Header;
