import React from "react";
import avatar from '../images/avatar.jpg';

function Main(props) {  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <button
            type="button"
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></button>
          <img
            src={avatar}
            alt="Аватар"
            className="profile__avatar"
          />
          <div className="profile__profile-info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            />
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        />
      </section>

      <div className="grid">
        <ul className="cards"></ul>
      </div>
    </main>
  );
}

export default Main;