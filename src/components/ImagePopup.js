import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" />
        <figure className="photo-container">
          <img className="photo-container__photo" alt="" src={props.link} />
          <figcaption className="photo-container__photo-title"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;