import "./ItemCard.css";

function ItemCard({ item, onCardClicked }) {
  const handleCardClicked = () => {
    onCardClicked(item);
  };

  return (
    <li className="item-card">
      <h2 className="item-card__text">{item.name}</h2>
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
