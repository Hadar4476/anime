import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import classes from './Header.module.css';

import * as actions from '../../store/actions';

import SearchBar from './SearchBar/SearchBar';

const Header = (props) => {
  const { animes, onInitAnimes } = props;

  const history = useHistory();
  const { pathname } = useLocation();

  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    if (pathname === '/animes') {
      setIsFirstPage(animes[0]?.id === '1');
    }
  }, [animes, pathname]);

  useEffect(() => {
    if (pathname !== '/animes') {
      setIsFirstPage(false);
    }
  }, [pathname, history]);

  const onInitAnimesHandler = () => {
    if (pathname !== '/animes') {
      setIsFirstPage(false);
      history.push('/animes');
    }
    if (animes[0]?.id === '1') return;
    setIsFirstPage(false);
    onInitAnimes();
  };

  return (
    <React.Fragment>
      <div className={classes.Logo} onClick={onInitAnimesHandler}>
        <button disabled={isFirstPage}>Anime</button>
      </div>
      <SearchBar />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    animes: state.animes.animes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitAnimes: () => dispatch(actions.initAnimes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
