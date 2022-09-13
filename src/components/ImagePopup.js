function ImagePopup({ isOpen, onClose, card }) {
  return (
    <div
      className={`popup popup_type_photo ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <div
        className={`popup__container ${isOpen && "active"}`}
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className="popup__close" type="button" onClick={onClose} />
        <figure className="photo-container">
          <img
            className="photo-container__photo"
            alt={card?.name}
            src={card?.link}
          />
          <figcaption className="photo-container__photo-title">
            {card?.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
