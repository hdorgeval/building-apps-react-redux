import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="jumbotron">
    <h1> Pluralsight Administration</h1>
    <p>React, Redux and React Router for the web</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);
