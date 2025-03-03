import "./SideBar.css";
import avatarImg from "../../assets/avatar.svg";

function SideBar({ onEditProfile, onLogOut }) {
  return (
    <section className="sidebar">
      <div className="sidebar__user-container">
        <img
          className="sidebar__avatar"
          src={avatarImg}
          alt="Terrence Tegegne"
        />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
      <button onClick={onEditProfile} type="button">
        Change profile data
      </button>
      <button onClick={onLogOut} type="button">
        Log out
      </button>
    </section>
  );
}

export default SideBar;
