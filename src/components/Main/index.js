import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import FlickrContainer from '../../containers/FlickrContainer';
import PlacesContainer from '../../containers/PlacesContainer';
import Home from '../../containers/Home';

const Main = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={FlickrContainer} path="/flickr" />
    <Route component={PlacesContainer} path="/places" />
    <Route component={NotFound} />
  </Switch>
);
export default Main;
