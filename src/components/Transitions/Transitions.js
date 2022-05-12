import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import ProjectPage from '../../pages/ProjectPage';

import './Transitions.css';

const Transitions = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transitions;
