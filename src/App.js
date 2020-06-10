import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Login from './Components/Login'

const App = () => {

  return(
    <div className="app">
      <Login />
    </div>
  )
}

export default App