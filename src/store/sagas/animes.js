import { put, call, all } from 'redux-saga/effects';
import axios from '../../axios-animes';

import * as actions from '../actions';

export function* initAnimesSaga(action) {
  try {
    const { data } = yield axios.get('');
    yield all([
      yield put(actions.initAnimesSuccess(data.data)),
      yield put(actions.initLinks(data.links)),
    ]);
  } catch (error) {
    const errorMessage = error?.response?.data?.errors[0]?.title;
    yield put(actions.initAnimesFail(errorMessage));
  }
}

export function* fetchNextAnimePageSaga({ nextPage }) {
  try {
    const { data } = yield axios.get(`${nextPage}`);
    yield all([
      yield put(actions.fetchNextAnimePageSuccess(data.data)),
      yield put(actions.initLinks(data.links)),
    ]);
  } catch (error) {
    const errorMessage = error?.response?.data?.errors[0]?.title;
    yield put(actions.fetchNextAnimePageFail(errorMessage));
  }
}

export function* fetchPreviousAnimePageSaga({ previousPage }) {
  try {
    const { data } = yield axios.get(`${previousPage}`);
    yield all([
      yield put(actions.fetchPreviousAnimePageSuccess(data.data)),
      yield put(actions.initLinks(data.links)),
    ]);
  } catch (error) {
    const errorMessage = error?.response?.data?.errors[0]?.title;
    yield put(actions.fetchPreviousAnimePageFail(errorMessage));
  }
}

export function* searchAnimeSaga({ searchInput }) {
  try {
    const { data } = yield axios.get(`?filter[text]=${searchInput}`);
    yield all([
      yield put(actions.searchAnimeSucces(data.data)),
      yield put(actions.initLinks(data.links)),
    ]);
  } catch (error) {
    const errorMessage = error?.response?.data?.errors[0]?.title;
    yield put(actions.searchAnimeFail(errorMessage));
  }
}

export function* initSingleAnimeSaga({ animeId }) {
  try {
    const { data } = yield axios.get(`/${animeId}`);
    yield put(actions.initSingleAnimeSuccess(data.data));
  } catch (error) {
    const errorMessage = error?.response?.data?.errors[0]?.title;
    yield put(actions.initSingleAnimeFail(errorMessage));
  }
}
