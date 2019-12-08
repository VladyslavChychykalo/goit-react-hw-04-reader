import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader/Loader';
import '../common/css/reader.css';

const AsyncReader = Loadable({
  loader: () => import('./Reader/Reader') /* webpackChunkName: 'reader-page' */,
  loading: Loader,
});

const App = () => (
  <Switch>
    <Route path="/reader" component={AsyncReader} />
    <Redirect to="/reader" />
  </Switch>
);

export default App;
