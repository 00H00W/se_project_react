import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
import React from "react";

function ItemCard({ item, onCardClicked, onCardLike }) {
  const userData = React.useContext(CurrentUserContext);
  const liked = item.likes.includes(userData._id);

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
      <div className="item-card__label">
        <h2 className="item-card__text">{item.name}</h2>
        {(userData._id === item.owner || liked) && (
          <button
            className={`item-card__like-button${
              liked ? " item-card__like-button_liked" : ""
            }`}
            onClick={handleCardLiked}
          ></button>
        )}
      </div>
      <img
        onClick={handleCardClicked}
        className="item-card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
