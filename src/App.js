import React from 'react';
import { Switch, Route, useLocation } from 'react-router';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AnimesPage from './components/AnimesPage/AnimesPage';
import Footer from './components/Footer/Footer';
import Page404 from './components/Page404/Page404';
import SingleAnimePage from './components/SingleAnimePage/SingleAnimePage';

const App = () => {
  const { pathname } = useLocation();

  let header = null;
  if (pathname !== '/') {
    header = <Header />;
  }

  return (
    <React.Fragment>
      <header>{header}</header>
      <main>
        <Switch>
          <Route path='/singleAnime/:id' component={SingleAnimePage} />
          <Route path='/animes' component={AnimesPage} />
          <Route path='/' exact component={Home} />
          <Route path='*' exact component={Page404} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default App;
