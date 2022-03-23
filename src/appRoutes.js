import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/auth/login';

function appRoutes() {
  return (
      <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
      </Switch>
      </BrowserRouter>
  )
}

export default appRoutes