import React from 'react';
import Card from '../../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import classes from './Projects.module.css';

const Projects = () => {
  return (
    <section className={classes.projects}>
      <h3 className={classes['title-recents']}>Recent projects</h3>
      <div className={classes['projects-container']}>
        <Card className={classes['project-card']}>
          <h2>E-commerce</h2>
          <div className={classes['pic-container']}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://e-commerce-rjx.netlify.app/"
              className={classes.visit}
            >
              <img src="assets/projects/e-commerce.png" alt="E-commerce" />
            </a>
          </div>
          <div className={classes['icons-container']}>
            <div className={classes.techs}>
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faJs} />
            </div>
          </div>
          <div className={classes.links}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/JeyssonDev/e-commerce-app"
              className={classes.github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://e-commerce-rjx.netlify.app/"
              className={classes.visit}
            >
              Visit
            </a>
          </div>
        </Card>
        <Card className={classes['project-card']}>
          <h2>Rick And Morty</h2>
          <div className={classes['pic-container']}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://rick-and-morty-rjx.netlify.app/"
              className={classes.visit}
            >
              <img
                src="assets/projects/rick-and-morty.png"
                alt="rick-and-morty"
              />
            </a>
          </div>
          <div className={classes['icons-container']}>
            <div className={classes.techs}>
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faJs} />
            </div>
          </div>
          <div className={classes.links}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/JeyssonDev/rick-and-morty-wiki-app"
              className={classes.github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://rick-and-morty-rjx.netlify.app/"
              className={classes.visit}
            >
              Visit
            </a>
          </div>
        </Card>
        <Card className={classes['project-card']}>
          <h2>Pokedex</h2>
          <div className={classes['pic-container']}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://pokedex-api-rjx.netlify.app/"
              className={classes.visit}
            >
              <img src="assets/projects/pokedex.png" alt="pokedex-wiki" />
            </a>
          </div>
          <div className={classes['icons-container']}>
            <div className={classes.techs}>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
          <div className={classes.links}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/JeyssonDev/Pokedex-Api"
              className={classes.github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://pokedex-api-rjx.netlify.app/"
              className={classes.visit}
            >
              Visit
            </a>
          </div>
        </Card>
        <Card className={classes['project-card']}>
          <h2>Users CRUD</h2>
          <div className={classes['pic-container']}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://users-crud-rjx.netlify.app/"
              className={classes.visit}
            >
              <img src="assets/projects/users-crud.png" alt="users-crud" />
            </a>
          </div>
          <div className={classes['icons-container']}>
            <div className={classes.techs}>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
          <div className={classes.links}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/JeyssonDev/Users-CRUD"
              className={classes.github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://users-crud-rjx.netlify.app/"
              className={classes.visit}
            >
              Visit
            </a>
          </div>
        </Card>
        <Card className={classes['project-card']}>
          <h2>Quotes App</h2>
          <div className={classes['pic-container']}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://quoteapprjs.netlify.app/"
              className={classes.visit}
            >
              <img src="assets/projects/quotes.png" alt="quotes-app" />
            </a>
          </div>
          <div className={classes['icons-container']}>
            <div className={classes.techs}>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
          <div className={classes.links}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/JeyssonDev/Quote-App"
              className={classes.github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://quoteapprjs.netlify.app/"
              className={classes.visit}
            >
              Visit
            </a>
          </div>
        </Card>
        <Card className={classes['project-card']}>
          <h2>Weather App</h2>
          <div className={classes['pic-container']}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://weather-apprjx-245ddc.netlify.app/"
              className={classes.visit}
            >
              <img src="assets/projects/weather-app.png" alt="weather-app" />
            </a>
          </div>
          <div className={classes['icons-container']}>
            <div className={classes.techs}>
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faJs} />
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
          <div className={classes.links}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/JeyssonDev/Weather-App"
              className={classes.github}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://weather-apprjx-245ddc.netlify.app/"
              className={classes.visit}
            >
              Visit
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
