import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assests/images/twitter-like-app-light-logo.svg';
import { PAGE_NAMES } from '../../utils/constants';

const Menu = () => {
  const currentPage = useSelector((state) => state.pages.currentPage);
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <nav className="menu">
      <ul className="menu__container">
        <li className="menu__logo">
          <a href="/">
            <img className="twitter-like-logo" src={logo} alt="twitter-like app" />
          </a>
        </li>
        <li className="menu__home">
          <button
            className={`menu__button ${currentPage.name === PAGE_NAMES.HOME && 'highlight'}`}
            onClick={() => goTo('/')}
            type="button"
          >
            Home
          </button>
        </li>
        <li className="menu__like">
          <button
            className={`menu__button ${currentPage.name === PAGE_NAMES.LIKE && 'highlight'}`}
            onClick={() => goTo('/likes')}
            type="button"
          >
            Likes
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
