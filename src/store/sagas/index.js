import { takeLatest } from 'redux-saga/effects';

import {
  initAnimesSaga,
  fetchNextAnimePageSaga,
  fetchPreviousAnimePageSaga,
  searchAnimeSaga,
  initSingleAnimeSaga,
} from './animes';

import * as actionTypes from '../actions/actionTypes';

export function* watchInitAnimes() {
  yield takeLatest(actionTypes.INIT_ANIMES, initAnimesSaga);
}

export function* watchFetchNextAnimePage() {
  yield takeLatest(actionTypes.FETCH_NEXT_ANIME_PAGE, fetchNextAnimePageSaga);
}

export function* watchFetchPreviousAnimePage() {
  yield takeLatest(
    actionTypes.FETCH_PREVIOUS_ANIME_PAGE,
    fetchPreviousAnimePageSaga
  );
}

export function* watchSearchAnime() {
  yield takeLatest(actionTypes.SEARCH_ANIME, searchAnimeSaga);
}

export function* watchInitSingleAnime() {
  yield takeLatest(actionTypes.INIT_SINGLE_ANIME, initSingleAnimeSaga);
}
