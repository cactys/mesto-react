function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button className="card__trach-icon" type="button" />
      <img
        className="card__image"
        alt={props.card.name}
        src={props.card.link}
        onClick={handleClick}
      />
      <div className="card__description">
        <h3 className="card__name">{props.card.name}</h3>
        <div className="card__like-container">
          <button className="card__like-button" type="button" />
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
