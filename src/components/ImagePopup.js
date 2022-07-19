function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_photo ${props.isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        />
        <figure className="photo-container">
          <img
            className="photo-container__photo"
            alt={props.card ? props.card.name : ''}
            src={props.card ? props.card.link : '#'}
          />
          <figcaption className="photo-container__photo-title">
            {props.card ? props.card.name : ''}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
