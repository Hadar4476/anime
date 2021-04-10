import React, { useEffect, useState } from 'react';

import classes from './AnimesPage.module.css';

import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import SingleAnime from './SingleAnime/SingleAnime';
import Spinner from '../UI/Spinner/Spinner';

const AnimesPage = (props) => {
  const {
    animes,
    links,
    onInitAnimes,
    onFetchNextAnimePage,
    onFetchPreviousAnimePage,
  } = props;

  const [animesState, setAnimesState] = useState([]);
  const [linksState, setLinksState] = useState({});

  const animePageClasses = [classes.AnimesPage, 'container'];
  const animesContainerClasses = [
    classes.AnimesContainer,
    'row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-5',
  ];

  const mapAnime = (anime) => {
    return {
      id: anime?.id,
      name: anime.attributes?.canonicalTitle,
      image: anime.attributes.posterImage?.medium,
    };
  };

  const fetchNextAnimePage = () => {
    const splitNextLink = linksState.next.substring(
      linksState.next.indexOf('?')
    );
    onFetchNextAnimePage(splitNextLink);
  };

  const fetchPreviousAnimePage = () => {
    const splitPreviousLink = linksState.prev.substring(
      linksState.prev.indexOf('?')
    );
    onFetchPreviousAnimePage(splitPreviousLink);
  };

  useEffect(() => {
    onInitAnimes();
  }, [onInitAnimes]);

  useEffect(() => {
    setAnimesState(animes);
    setLinksState(links);
  }, [animes, links]);

  let mappedAnimes = [];
  if (animesState.length) {
    mappedAnimes = animesState.map((item) => mapAnime(item));
  }

  let animeElements = null;
  if (mappedAnimes.length) {
    animeElements = mappedAnimes.map((item) => (
      <SingleAnime key={item.id} {...item} />
    ));
  }

  return (
    <div className={animePageClasses.join(' ')}>
      <div className={classes.PagesNavigation}>
        <button disabled={!linksState.prev} onClick={fetchPreviousAnimePage}>
          <i className='fas fa-chevron-left'></i>
        </button>
        <button disabled={!linksState.next} onClick={fetchNextAnimePage}>
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
      <Spinner />
      <div className={animesContainerClasses.join(' ')}>{animeElements}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    animes: state.animes.animes,
    links: state.animes.links,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitAnimes: () => dispatch(actions.initAnimes()),
    onFetchNextAnimePage: (nextPage) =>
      dispatch(actions.fetchNextAnimePage(nextPage)),
    onFetchPreviousAnimePage: (previousPage) =>
      dispatch(actions.fetchPreviousAnimePage(previousPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimesPage);
