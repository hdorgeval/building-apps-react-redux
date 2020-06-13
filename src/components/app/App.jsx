import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from '../about';
import { Header } from '../common';
import { Courses } from '../courses';
import { Home } from '../home';
import { PageNotFound } from './';

export const App = () => {
  return (
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
  );
};
