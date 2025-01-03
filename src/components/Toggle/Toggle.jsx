import "./Toggle.css";

function Toggle({ id = "default-toggle", checked, onChange }) {
  return (
    <>
      <input
        className="toggle"
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label className="toggle__label" htmlFor={id}>
        <span className="toggle__button" />
        <div className="toggle__container">
          <span
            className={
              "toggle__value " +
              (!checked ? "toggle__value--active" : "toggle__value--inactive")
            }
          >
            F
          </span>
          <span
            className={
              "toggle__value " +
              (checked ? "toggle__value--active" : "toggle__value--inactive")
            }
          >
            C
          </span>
        </div>
      </label>
    </>
  );
}

export default Toggle;
