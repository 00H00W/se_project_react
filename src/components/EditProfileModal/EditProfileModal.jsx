import React from "react";
import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ closeActiveModal, isOpen, onSubmit, isLoading }) {
  const userData = React.useContext(CurrentUserContext);
  const [data, setData] = React.useState({
    name: "",
    avatar: "",
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
      name: userData ? userData.name : "",
      avatar: userData ? userData.avatar : "",
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      submit="Save changes"
      isOpen={isOpen}
      onCloseButtonClick={closeActiveModal}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          id="name"
          type="text"
          name="name"
          className="modal__input"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          id="imageUrl"
          type="url"
          name="avatar"
          className="modal__input"
          placeholder="Image URL"
          value={data.avatar}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
