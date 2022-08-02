import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup({ isOpen, onClose, handleSubmit }) {
  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default ConfirmDeletePopup;
