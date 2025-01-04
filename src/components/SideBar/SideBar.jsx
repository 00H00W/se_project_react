import "./SideBar.css";
import avatarImg from "../../assets/avatar.svg";

function SideBar() {
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
    </section>
  );
}

export default SideBar;
