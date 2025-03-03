import React from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  closeActiveModal,
  isOpen,
  handleRegistration,
  isLoading,
  openRegisterModal,
}) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    reset();
  }, [isOpen]);

  function reset() {
    setData({
      email: "",
      password: "",
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration(data);
  }

  return (
    <ModalWithForm
      title="Log in"
      submit="Log in"
      isOpen={isOpen}
      onCloseButtonClick={closeActiveModal}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      altSubmit={"or Register"}
      onAltSubmit={openRegisterModal}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          id="email"
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          id="password"
          type="password"
          name="password"
          className="modal__input"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
