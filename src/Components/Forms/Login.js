import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import axios from 'axios'

const Login = ({ username, setUsername, password, setPassword }) => {

  const onSubmit = (el) => {
    el.preventDefault()
    axios.post('/route/signin', {username: username, password: password})
      .then(response => console.log(response))
  }

  return(
    <div className="forms-container">
      <div className="forms">
        <form onSubmit={onSubmit}>
          <div className="form">
            <div className="credentials-container">
              <div className="credential">
                <p>Username</p>
                <input type="text" value={username} placeholder="username" onChange={(el) => setUsername(el.target.value)}/>
              </div>
              <div className="credential">
                <p>Password</p>
                <input type="password" value={password} placeholder="password" onChange={(el) => setPassword(el.target.value)}/>
              </div>
            </div>
            <Button type="submit" color="primary" variant="contained">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login