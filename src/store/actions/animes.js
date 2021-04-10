import * as actionTypes from './actionTypes';

export const initAnimes = () => {
  return {
    type: actionTypes.INIT_ANIMES,
  };
};

export const initAnimesSuccess = (fetchedAnimes) => {
  return {
    type: actionTypes.INIT_ANIMES_SUCCESS,
    fetchedAnimes: fetchedAnimes,
  };
};

export const initAnimesFail = (error) => {
  return {
    type: actionTypes.INIT_ANIMES_FAIL,
    error: error,
  };
};

export const initLinks = (fetchedLinks) => {
  return {
    type: actionTypes.INIT_LINKS,
    fetchedLinks: fetchedLinks,
  };
};

export const fetchNextAnimePage = (nextPage) => {
  return {
    type: actionTypes.FETCH_NEXT_ANIME_PAGE,
    nextPage: nextPage,
  };
};

export const fetchNextAnimePageSuccess = (fetchedAnimes) => {
  return {
    type: actionTypes.FETCH_NEXT_ANIME_PAGE_SUCCESS,
    fetchedAnimes: fetchedAnimes,
  };
};

export const fetchNextAnimePageFail = (error) => {
  return {
    type: actionTypes.FETCH_NEXT_ANIME_PAGE_FAIL,
    error: error,
  };
};

export const fetchPreviousAnimePage = (previousPage) => {
  return {
    type: actionTypes.FETCH_PREVIOUS_ANIME_PAGE,
    previousPage: previousPage,
  };
};

export const fetchPreviousAnimePageSuccess = (fetchedAnimes) => {
  return {
    type: actionTypes.FETCH_PREVIOUS_ANIME_PAGE_SUCCESS,
    fetchedAnimes: fetchedAnimes,
  };
};

export const fetchPreviousAnimePageFail = (error) => {
  return {
    type: actionTypes.FETCH_PREVIOUS_ANIME_PAGE_FAIL,
    error: error,
  };
};

export const searchAnime = (searchInput) => {
  return {
    type: actionTypes.SEARCH_ANIME,
    searchInput: searchInput,
  };
};

export const searchAnimeSucces = (fetchedAnimes) => {
  return {
    type: actionTypes.SEARCH_ANIME_SUCCESS,
    fetchedAnimes: fetchedAnimes,
  };
};
export const searchAnimeFail = (error) => {
  return {
    type: actionTypes.SEARCH_ANIME_FAIL,
    error: error,
  };
};

export const initSingleAnime = (animeId) => {
  return {
    type: actionTypes.INIT_SINGLE_ANIME,
    animeId: animeId,
  };
};

export const initSingleAnimeSuccess = (fetchedAnime) => {
  return {
    type: actionTypes.INIT_SINGLE_ANIME_SUCCESS,
    fetchedAnime: fetchedAnime,
  };
};

export const initSingleAnimeFail = (error) => {
  return {
    type: actionTypes.INIT_SINGLE_ANIME,
    error: error,
  };
};
