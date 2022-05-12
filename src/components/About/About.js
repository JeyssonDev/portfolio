import React from 'react';
import Icons from '../../UI/Icons';

import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.description}>
        <h2>Hello world! I'm Jeysson</h2>
        <h4>Front-end developer</h4>
        <p>
          Always ready to learn something new. I am ambitious and
          self-motivated, leading me to be productive both in team projects and
          in self-managed projects.
        </p>
        <Icons className={classes['hero-icons']} />
      </div>
      <div className={classes.photo}></div>
    </section>
  );
};

export default About;
