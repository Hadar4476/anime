import { updateObject } from '../../shared/utility';

import * as actionTypes from '../actions/actionTypes';

const initalState = {
  animes: [],
  links: {},
  singleAnime: {},
  loading: true,
  error: null,
};

const initAnimes = (state, action) => {
  return updateObject(state, { loading: true });
};

const initAnimesSuccess = (state, action) => {
  return updateObject(state, {
    animes: action.fetchedAnimes,
    loading: false,
    error: null,
  });
};
const initAnimesFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const initLinks = (state, action) => {
  return updateObject(state, { links: action.fetchedLinks, error: null });
};

const fetchNextAnimePage = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchNextAnimePageSuccess = (state, action) => {
  return updateObject(state, {
    animes: action.fetchedAnimes,
    loading: false,
    error: null,
  });
};

const fetchNextAnimePageFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const fetchPreviousAnimePage = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchPreviousAnimePageSuccess = (state, action) => {
  return updateObject(state, {
    animes: action.fetchedAnimes,
    loading: false,
    error: null,
  });
};

const fetchPreviousAnimePageFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const searchAnime = (state, action) => {
  return updateObject(state, { loading: true });
};

const searchAnimeSucces = (state, action) => {
  return updateObject(state, {
    animes: action.fetchedAnimes,
    loading: false,
    error: null,
  });
};
const searchAnimeFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const initSingleAnime = (state, ation) => {
  return updateObject(state, { loading: true });
};

const initSingleAnimeSuccess = (state, action) => {
  return updateObject(state, {
    singleAnime: action.fetchedAnime,
    loading: false,
    error: null,
  });
};

const initSingleAnimeFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INIT_ANIMES:
      return initAnimes(state, action);
    case actionTypes.INIT_ANIMES_SUCCESS:
      return initAnimesSuccess(state, action);
    case actionTypes.INIT_ANIMES_FAIL:
      return initAnimesFail(state, action);
    case actionTypes.INIT_LINKS:
      return initLinks(state, action);
    case actionTypes.FETCH_NEXT_ANIME_PAGE:
      return fetchNextAnimePage(state, action);
    case actionTypes.FETCH_NEXT_ANIME_PAGE_SUCCESS:
      return fetchNextAnimePageSuccess(state, action);
    case actionTypes.FETCH_NEXT_ANIME_PAGE_FAIL:
      return fetchNextAnimePageFail(state, action);
    case actionTypes.FETCH_PREVIOUS_ANIME_PAGE:
      return fetchPreviousAnimePage(state, action);
    case actionTypes.FETCH_PREVIOUS_ANIME_PAGE_SUCCESS:
      return fetchPreviousAnimePageSuccess(state, action);
    case actionTypes.FETCH_PREVIOUS_ANIME_PAGE_FAIL:
      return fetchPreviousAnimePageFail(state, action);
    case actionTypes.SEARCH_ANIME:
      return searchAnime(state, action);
    case actionTypes.SEARCH_ANIME_SUCCESS:
      return searchAnimeSucces(state, action);
    case actionTypes.SEARCH_ANIME_FAIL:
      return searchAnimeFail(state, action);
    case actionTypes.INIT_SINGLE_ANIME:
      return initSingleAnime(state, action);
    case actionTypes.INIT_SINGLE_ANIME_SUCCESS:
      return initSingleAnimeSuccess(state, action);
    case actionTypes.INIT_SINGLE_ANIME_FAIL:
      return initSingleAnimeFail(state, action);
    default:
      return state;
  }
};

export default reducer;
