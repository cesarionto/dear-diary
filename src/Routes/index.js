import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from "../pages/Login"
import Home from "../pages/Home"
import SignUp from '../pages/SignUp';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Routes() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
          <PublicRoute exact path="/" component={Login}/>
          <PublicRoute  path="/sign-up" component={SignUp}/>
          <PrivateRoute path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}