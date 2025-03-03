import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";

function ClothesSection({
  clothingItems,
  onAddButtonClick,
  onCardClicked,
  onCardLike,
}) {
  const userData = React.useContext(CurrentUserContext);
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <p>Your items</p>
        <button
          onClick={onAddButtonClick}
          type="button"
          className="clothes-section__add-clothes-button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems
          .filter((item) => item.owner === userData._id)
          .map((item) => {
            return (
              <ItemCard
                onCardClicked={onCardClicked}
                key={item._id}
                item={item}
                onCardLike={onCardLike}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default ClothesSection;
