import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import moment from 'moment';

import * as actions from '../../store/actions';

import classes from './SingleAnimePage.module.css';

import Spinner from '../UI/Spinner/Spinner';

const SingleAnimePage = (props) => {
  const { singleAnime, onInitSingleAnime } = props;

  const params = useParams();

  const history = useHistory();

  const [animeIdState, setAnimeIdState] = useState('');
  const [singleAnimeState, setSingleAnimeState] = useState({});

  const mapAnime = (anime) => {
    return {
      name: anime.attributes?.canonicalTitle,
      createdAt: anime.attributes?.createdAt,
      plot: anime.attributes?.synopsis,
      rating: anime.attributes?.averageRating,
      japaneseName: anime.attributes?.titles.ja_jp,
      endDate: anime.attributes?.endDate,
      status: anime.attributes?.status,
      mediumImage: anime.attributes.posterImage?.medium,
      largeImage: anime.attributes.posterImage?.large,
      originalImage: anime.attributes.posterImage?.original,
      episodes: anime.attributes?.episodeCount,
    };
  };

  useEffect(() => {
    const { id } = params;
    if (!id.match(/^[0-9]+$/g)) {
      history.push('/animes');
    }
    setAnimeIdState(id);
  }, [params, setAnimeIdState, history]);

  useEffect(() => {
    if (animeIdState) {
      onInitSingleAnime(animeIdState);
    }
  }, [animeIdState, onInitSingleAnime]);

  useEffect(() => {
    if (singleAnime.id) {
      setSingleAnimeState(singleAnime);
    }
  }, [singleAnime]);

  let mappedAnime = {};
  if (singleAnimeState.id) {
    mappedAnime = mapAnime(singleAnimeState);
  }

  let animeElement = null;
  if (mappedAnime.name) {
    const {
      mediumImage,
      name,
      plot,
      japaneseName,
      createdAt,
      endDate,
      rating,
      status,
      episodes,
    } = mappedAnime;
    animeElement = (
      <div className={classes.SingleAnimePage}>
        <div className={classes.Top}>
          <div className={classes.Image}>
            <img src={mediumImage} alt={name} />
          </div>
          <div className={classes.Info}>
            <div className={classes.Name}>
              <p title={name}>{name}</p>
            </div>
            <div className={classes.Plot}>
              <p>{plot}</p>
            </div>
          </div>
        </div>
        <div className={classes.Bottom}>
          <div className={classes.Dates}>
            <div className={classes.DateItem}>
              <p>Japanese name:</p>
              <p className={classes.InfoData}>{japaneseName}</p>
            </div>
            <div className={classes.DateItem}>
              <p>Status:</p>
              <p className={classes.InfoData}>{status}</p>
            </div>
            <div className={classes.DateItem}>
              <p>Date aired:</p>
              <p className={classes.InfoData}>
                {moment(createdAt).format('MMM Do YY')}
              </p>
            </div>
            <div className={classes.DateItem}>
              <p>Date finished:</p>
              <p className={classes.InfoData}>
                {moment(endDate).format('MMM Do YY')}
              </p>
            </div>
          </div>
          <div className={classes.MoreInfo}>
            <div className={classes.MoreInfoItem}>
              <p>Nº Episode:</p>
              <p className={classes.InfoData}>{episodes}</p>
            </div>
            <div className={classes.MoreInfoItem}>
              <p>Rating:</p>
              <p className={classes.InfoData}>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Spinner />
      {animeElement}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    singleAnime: state.animes.singleAnime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitSingleAnime: (animeId) => dispatch(actions.initSingleAnime(animeId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAnimePage);
