function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        />
        <form
          className="form form_edit-profile"
          name={`${props.name}-form`}
          noValidate
        >
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="form__submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
