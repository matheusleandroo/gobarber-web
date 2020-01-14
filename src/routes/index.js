import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact componet={SignIn} />
      <Route path="/register" componet={SignUp} />

      <Route path="/dashboard" componet={Dashboard} />
      <Route path="/profile" componet={Profile} />
    </Switch>
  );
}
