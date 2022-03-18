import React from 'react';
import twitterPicture from '../../assests/images/twitter-profile.jpeg';
import Button from '../Button';

const Sidebar = () => {
  const follow = () => {
    window.location = 'https://twitter.com/RianTavaresDev';
  };

  return (
    <aside className="sidebar">
      <p className="sidebar__title">Trends for you</p>

      <div className="sidebar__item">
        <div className="sidebar__content">
          <a href="https://riantavares.github.io/" target="_blank" rel="noreferrer">
            <div className="sidebar__region">
              <p>Web development</p>
            </div>
            <div className="sidebar__link">
              <p>Rian&apos;s Web Portfolio</p>
            </div>
            <div className="sidebar__tweets">
              <p>162K Tweets</p>
            </div>
          </a>
        </div>
      </div>

      <div className="sidebar__item">
        <div className="sidebar__content">
          <a href="https://www.linkedin.com/in/riantavares/" target="_blank" rel="noreferrer">
            <div className="sidebar__region">
              <p>Carreer</p>
            </div>
            <div className="sidebar__link">
              <p>Linkedin Profile</p>
            </div>
            <div className="sidebar__tweets">
              <p>200K Tweets</p>
            </div>
          </a>
        </div>
      </div>

      <div className="sidebar__item">
        <div className="sidebar__content">
          <a
            href="https://www.techtudo.com.br/listas/2019/07/lampada-com-camera-espia-vale-a-pena-veja-pros-e-contras-do-aparelho.ghtml"
            target="_blank"
            rel="noreferrer"
          >
            <div className="sidebar__region">
              <p>Trending in Brazil</p>
            </div>
            <div className="sidebar__link">
              <p>Spy camera lamp review</p>
            </div>
            <div className="sidebar__tweets">
              <p>88K Tweets</p>
            </div>
          </a>
        </div>
      </div>

      <hr className="sidebar__division" />
      <p className="sidebar__title">Who to follow</p>

      <div className="sidebar__item">
        <div className="sidebar__follow">
          <div className="sidebar__picture">
            <img src={twitterPicture} alt="Rian twitter" />
          </div>
          <div className="twitter-account-container">
            <p className="twitter-account-container__title">Frontend Survivor</p>
            <p className="twitter-account-container__subtitle">@riantavaresdev</p>
          </div>
          <Button
            backgroundColor="light"
            textColor="secondary"
            border="none"
            text="Follow"
            width="30%"
            onClick={follow}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
