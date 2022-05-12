import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import classes from './Icons.module.css';

const Icons = (props) => {
  return (
    <div className={props.className}>
      <a
        target="_blank"
        href="https://github.com/JeyssonDev"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          className={classes.social}
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jeyssonhenriquez/"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          className={classes.social}
        />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/jeyssonhenriquez/?hl=es-la"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          className={classes.social}
        />
      </a>
    </div>
  );
};

export default Icons;
