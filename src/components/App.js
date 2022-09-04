import { useState, useEffect } from 'react';
import Main from './Main';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

  const isOpenPopup =
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    selectedCard;

  useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    };
    if (isOpenPopup) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isOpenPopup]);

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (selectedCard) => {
    setIsOpen(true);
    setSelectedCard(selectedCard);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      //совсем забыл =)
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
    setIsOpen(false);
  };

  const handleUpdateUser = (data) => {
    api
      .editUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateAvatar = (data) => {
    api
      .editAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleAddPlaceSubmit = (data) => {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup card={selectedCard} isOpen={isOpen} onClose={closeAllPopups} />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
