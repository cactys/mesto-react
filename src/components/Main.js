import { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <button
            type="button"
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          ></button>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <div className="profile__profile-info">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            />
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} />
      </section>

      <div className="grid">
        <ul className="cards">
          {cards.map((item) => (
            <Card key={item._id} card={item} onCardClick={onCardClick} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
