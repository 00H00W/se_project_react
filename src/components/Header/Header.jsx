import "./Header.css";
import logoImg from "../../assets/logo.svg";
import avatarImg from "../../assets/avatar.svg";
import React from "react";
import Toggle from "../Toggle/Toggle";

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
      <img className="header__logo" src={logoImg} alt="WTWR Logo" />
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
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          className="header__avatar"
          src={avatarImg}
          alt="Terrence Tegegne"
        />
      </div>
    </header>
  );
}

export default Header;