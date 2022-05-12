import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './Header.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes['nav-container']}>
        <ul
          className={`${classes['nav-menu']} ${
            showMenu && classes['active-menu']
          }`}
        >
          <li>
            <Link to="/" className={classes.visit} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={classes.visit} onClick={closeMenu}>
              Projects
            </Link>
          </li>
        </ul>
        <div className={classes.mobile} onClick={showMenuHandler}>
          {showMenu ? (
            <FontAwesomeIcon icon={faTimes} className={classes.icon} />
          ) : (
            <FontAwesomeIcon icon={faBars} className={classes.icon} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
