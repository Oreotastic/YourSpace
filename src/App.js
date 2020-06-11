import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'

const App = () => {

  return(
    <div className="app">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App