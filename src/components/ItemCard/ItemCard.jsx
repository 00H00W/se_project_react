import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
import React from "react";

function ItemCard({ item, onCardClicked, onCardLike }) {
  const userData = React.useContext(CurrentUserContext);

  const handleCardClicked = () => {
    onCardClicked(item);
  };
  const handleCardLiked = () => {
    // item.isLiked = item.isLiked ? true : false;
    console.log(item);
    onCardLike(item);
  };

  return (
    <li className="item-card">
      <h2 className="item-card__text">{item.name}</h2>
      {(userData._id === item.owner || item.likes.includes(userData._id)) && (
        <button onClick={handleCardLiked}>like</button>
      )}
      <img
        onClick={handleCardClicked}
        className="item-card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
