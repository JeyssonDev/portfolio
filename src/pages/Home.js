import React, { Fragment } from 'react';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import BackgroundAnimation from '../components/BackgroundAnimation/BackgroundAnimation';

const Home = () => {
  return (
    <Fragment>
      <BackgroundAnimation />
      <About />
      <Skills />
    </Fragment>
  );
};

export default Home;
