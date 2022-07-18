// import logo from '..';
// import './App.css';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const handleEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  return (
    // <div className="App">
    <body className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfile}
          onAddPlace={handleAddPlace}
          onEditAvatar={handleEditAvatar}
        />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                type="text"
                placeholder="Ваше имя"
                className="form__input form__input_profile-name"
                id="edit-name"
                name="name"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="form__input-error edit-name-error"></span>
            </label>
            <label className="form__field">
              <input
                type="text"
                placeholder="Чем занимаетесь?"
                className="form__input form__input_profile-job"
                id="edit-job"
                name="job"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="form__input-error edit-job-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name="add-photo"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                type="text"
                placeholder="Название"
                className="form__input form__input_photo-title"
                id="card-name"
                name="title"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="form__input-error card-name-error"></span>
            </label>
            <label className="form__field">
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="form__input form__input_photo-src"
                id="card-link"
                name="src"
                required
              />
              <span className="form__input-error card-link-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
        >
          <fieldset className="form__set">
            <label className="form__field">
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="form__input form__input_avatar-src"
                id="avatar-link"
                name="src"
                required
              />
              <span className="form__input-error avatar-link-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        <ImagePopup />
        <Footer />
      </div>
    </body>
    // </div>
  );
}

export default App;