import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createReduxStore, initialState } from '../../redux';
import { About } from '../about';
import { Header } from '../common';
import { Courses } from '../courses';
import { Home } from '../home';
import { PageNotFound } from './';

const store = createReduxStore(initialState);

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/courses">
              <Courses />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ReduxProvider>
  );
};
