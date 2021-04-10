import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Home.module.css';

const Home = () => {
  const history = useHistory();

  const navigateToAnimes = () => {
    history.push('/animes');
  };

  return (
    <div className={classes.Home}>
      <div className={classes.Enter} onClick={navigateToAnimes}>
        <h1>Enter</h1>
      </div>
    </div>
  );
};

export default Home;
