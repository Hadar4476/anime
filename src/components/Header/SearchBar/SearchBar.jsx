import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';

import * as actions from '../../../store/actions';

import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const { pathname } = useLocation();

  const searchInputRef = useRef(null);

  const { onSearchAnime } = props;

  const searchForAnime = (value) => {
    if (!value.trim()) return;
    onSearchAnime(value);
  };

  const onEnterKey = (event) => {
    const { value } = event.target;
    if (!value.trim()) return;
    if (event.keyCode === 13) {
      return searchForAnime(value);
    }
  };

  let content = null;
  if (pathname === '/animes') {
    content = (
      <div className={classes.SearchBar}>
        <nav>
          <div className={classes.Input}>
            <label htmlFor='search_input'></label>
            <input
              ref={searchInputRef}
              id='search_input'
              type='text'
              placeholder='Search'
              autoComplete='off'
              onKeyUp={onEnterKey}
            />
            <div
              className={classes.Icon}
              onClick={() => searchForAnime(searchInputRef.current.value)}
            >
              <i className='fas fa-search'></i>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  return content;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchAnime: (searchInput) => dispatch(actions.searchAnime(searchInput)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
