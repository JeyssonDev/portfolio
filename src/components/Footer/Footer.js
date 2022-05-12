import React from 'react';
import Icons from '../../UI/Icons';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h5>Made with ♥ by Jeysson Henriquez</h5>
      <ul className={classes['links-contact']}>
        <div className={classes['link-column']}>
          <h4 className={classes['link-title']}>Call</h4>
          <a className={classes['link-item']} href="tel:+57-301-304-8638">
            301-304-8638
          </a>
        </div>
        <div className={classes['link-column']}>
          <h4 className={classes['link-title']}>Email</h4>
          <a
            className={classes['link-item']}
            href="mailto:jeissonhenrriquez@gmail.com"
          >
            jeissonhenrriquez@gmail.com
          </a>
        </div>
      </ul>
      <Icons className={classes.icons} />
    </footer>
  );
};

export default Footer;
