import React, { useState, useEffect } from 'react'
import {Button} from '@material-ui/core'
import axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (el) => {
    el.preventDefault()
    axios.post('/route/signin', {username: username, password: password})
      .then(response => console.log(response))
  }

  return(
    <div className="login">
      <div className="login-container">
        <form onSubmit={onSubmit}>
          <div className="form-container">
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
            <Button type="submit" color="primary" variant="contained">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login