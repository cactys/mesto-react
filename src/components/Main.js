import React, { useEffect, useState } from 'react';
import avatar from '../images/avatar.jpg';
import api from '../utils/api';

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState();

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
            onClick={props.onEditAvatar}
          ></button>
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          <div className="profile__profile-info">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            />
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        />
      </section>

      <div className="grid">
        <ul className="cards">
          {cards.map((item) => (
            <li className="card">
              <button className="card__trach-icon" type="button">
                Удалить
              </button>
              <img className="card__image" />
              <div className="card__description">
                <h3 className="card__name"></h3>
                <div className="card__like-container">
                  <button className="card__like-button" type="button">
                    Нравится
                  </button>
                  <p className="card__like-count"></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
