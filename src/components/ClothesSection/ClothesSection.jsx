import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ clothingItems, onAddButtonClick, onCardClicked }) {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard
              onCardClicked={onCardClicked}
              key={item._id}
              item={item}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
