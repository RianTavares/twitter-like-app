import React from 'react';

const Menu = () => (
  <nav className="menu">
    <ul className="menu__container">
      <li className="menu__home">
        <button className="menu__button" type="button">Home</button>
      </li>
      <li className="menu__like">
        <button className="menu__button" type="button">Like</button>
      </li>
    </ul>
  </nav>
);

export default Menu;
