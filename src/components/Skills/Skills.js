import React from 'react';
import Card from '../../UI/Card';

import classes from './Skills.module.css';

const techIcons = [
  {
    id: 'html5',
    img: 'assets/icon-html.png',
    name: 'HTML5',
  },
  {
    id: 'css3',
    img: 'assets/icon-css.png',
    name: 'CSS3',
  },
  {
    id: 'javascript',
    img: 'assets/icon-javascript.png',
    name: 'Javascript',
  },
  {
    id: 'react',
    img: 'assets/icon-react.png',
    name: 'React',
  },
  {
    id: 'nodejs',
    img: 'assets/icon-nodejs.png',
    name: 'Node Js',
  },
  {
    id: 'apirest',
    img: 'assets/icon-apirest.png',
    name: 'API Rest',
  },
  {
    id: 'postgresql',
    img: 'assets/icon-postgresql.png',
    name: 'PostgreSQL',
  },
  {
    id: 'git',
    img: 'assets/icon-git.png',
    name: 'Git',
  },
  {
    id: 'bootstrap',
    img: 'assets/icon-bootstrap.png',
    name: 'Bootstrap',
  },
  {
    id: 'SASS',
    img: 'assets/icon-sass.png',
    name: 'SASS',
  },
  {
    id: 'figma',
    img: 'assets/icon-figma.png',
    name: 'Figma',
  },
  {
    id: 'github',
    img: 'assets/icon-github.png',
    name: 'Github',
  },
  {
    id: 'gitlab',
    img: 'assets/icon-gitlab.png',
    name: 'Gitlab',
  },
  {
    id: 'responsive',
    img: 'assets/icon-responsive.png',
    name: 'Responsive Design',
  },
  {
    id: 'axios',
    img: 'assets/icon-axios.png',
    name: 'Axios',
  },
  {
    id: 'router',
    img: 'assets/icon-router.png',
    name: 'React Router',
  },
];

const mappedSkills = techIcons.map((tech) => {
  return (
    <Card key={tech.id} className={classes['tech-card']}>
      <img src={tech.img} alt={tech.name} />
      <h4>{tech.name}</h4>
    </Card>
  );
});

const Skills = () => {
  return (
    <section className={classes.hero}>
      <h2>Technologies I work with</h2>
      <div className={classes.tech}>{mappedSkills}</div>
    </section>
  );
};

export default Skills;
