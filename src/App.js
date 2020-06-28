import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Forms/Login'
import Signup from './Components/Forms/Signup'
import SignupCont from './Components/Forms/SignupCont'

const App = () => {

  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
          </Route>
          <Route exact path="/signup">
            <Signup username={username} setUsername={setUsername} password={password} setPassword={setPassword} first={first} setFirst={setFirst} last={last} setLast={setLast} />
          </Route>
          <Route exact path="/signup-profile">
            <SignupCont username={username} setUsername={setUsername} password={password} setPassword={setPassword} first={first} setFirst={setFirst} last={last} setLast={setLast} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App