function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button className="card__trach-icon" type="button" />
      <img
        className="card__image"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <div className="card__description">
        <h3 className="card__name">{card.name}</h3>
        <div className="card__like-container">
          <button className="card__like-button" type="button" />
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
