import React from 'react';
import { useHistory } from 'react-router';

import classes from './SingleAnime.module.css';

const animateCSSClasses = {
  bounceIn: 'animate__animated animate__bounceIn animate__faster	500ms',
};

const SingleAnime = (props) => {
  const { id, name, image } = props;

  const history = useHistory();

  const infoIconClasses = [animateCSSClasses.bounceIn, 'fas fa-info-circle'];

  const navigateToSingleAnimePage = () => {
    history.push(`/singleAnime/${id}`);
  };

  return (
    <div className={classes.Box}>
      <div className={classes.SingleAnime} onClick={navigateToSingleAnimePage}>
        <div className={classes.DarkBox}>
          <i className={infoIconClasses.join(' ')}></i>
        </div>
        <img className={classes.Image} src={image} alt={name} />
      </div>
      <p title={name}>{name}</p>
    </div>
  );
};

export default SingleAnime;
