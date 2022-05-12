import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Transitions from './components/Transitions/Transitions';

import './App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Transitions />
      <Footer />
    </Router>
  );
};

export default App;
