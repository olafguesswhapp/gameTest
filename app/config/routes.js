import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import CreateGame from '../components/CreateGame';
import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component={Main}>
  	  <Route path="game/new" component={CreateGame} />
    <IndexRoute component={Home} />
  </Route>
);