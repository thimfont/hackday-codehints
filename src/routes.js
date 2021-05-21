import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import NoMatch from './pages/404'

export default function Routes() {
    return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route component={NoMatch} />
          </Switch>
      </BrowserRouter>
    )
}