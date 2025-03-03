import React from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  closeActiveModal,
  isOpen,
  handleRegistration,
  isLoading,
}) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
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
      name: "",
      avatarUrl: "",
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleRegistration(data);
  }

  return (
    <ModalWithForm
      title="Sign up"
      submit="Next"
      isOpen={isOpen}
      onCloseButtonClick={closeActiveModal}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      altSubmit={"or Log in"}
    >
      <label htmlFor="name" className="modal__label">
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
      <label htmlFor="imageUrl" className="modal__label">
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
      <label htmlFor="imageUrl" className="modal__label">
        Name{" "}
        <input
          id="name"
          type="text"
          name="name"
          className="modal__input"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Avatar URL{" "}
        <input
          id="avatarUrl"
          type="link"
          name="avatarUrl"
          className="modal__input"
          placeholder="Avatar URL"
          value={data.avatarUrl}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
