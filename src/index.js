import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import 'popper.js/dist/popper';
import 'jquery/dist/jquery';

import './index.css';
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons';

import App from './App';

import animesReducer from './store/reducers/animes';

import {
  watchFetchNextAnimePage,
  watchFetchPreviousAnimePage,
  watchInitAnimes,
  watchInitSingleAnime,
  watchSearchAnime,
} from './store/sagas';

import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  animes: animesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchInitAnimes);
sagaMiddleware.run(watchFetchNextAnimePage);
sagaMiddleware.run(watchFetchPreviousAnimePage);
sagaMiddleware.run(watchSearchAnime);
sagaMiddleware.run(watchInitSingleAnime);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
