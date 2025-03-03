import "./SideBar.css";
import avatarImg from "../../assets/avatar.svg";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import TextAvatar from "../TextAvatar/TextAvatar";

function SideBar({ onEditProfile, onLogOut }) {
  const userData = React.useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <div className="sidebar__user-container">
        {userData.avatar ? (
          <img
            className="sidebar__avatar"
            src={userData.avatar}
            alt={userData.name}
          />
        ) : (
          <div className="sidebar__avatar">
            <TextAvatar text={userData.name} />
          </div>
        )}

        <p className="sidebar__username">{userData.name}</p>
      </div>
      <button className="sidebar__button" onClick={onEditProfile} type="button">
        Change profile data
      </button>
      <button className="sidebar__button" onClick={onLogOut} type="button">
        Log out
      </button>
    </section>
  );
}

export default SideBar;
