import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from '../about';
import { Header } from '../common';
import { Home } from '../home';

export const App = () => {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
