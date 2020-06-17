import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import axios from 'axios'

const Signup = ({ first, setFirst, last, setLast, username, setUsername, password, setPassword }) => {

  return (
    <div className="forms-container">
      <div className="forms">
        <form>
          <div className="form">
            <div className="credentials-container">
              <div className="credential">
                <p>First Name</p>
                <input type="text" value={first} placeholder="First" onChange={(el) => setFirst(el.target.value)}/>
              </div>
              <div className="credential">
                <p>Last Name</p>
                <input type="text" value={last} placeholder="Last" onChange={(el) => setLast(el.target.value)}/>
              </div>
              <div className="credential">
                <p>Username</p>
                <input type="text" value={username} placeholder="Username" onChange={(el) => setUsername(el.target.value)}/>
              </div>
              <div className="credential">
                <p>Password</p>
                <input type="password" value={password} placeholder="Password" onChange={(el) => setPassword(el.target.value)}/>
              </div>
            </div>
            <Link to="/signup-profile">
              <Button type="button" color="primary" variant="contained">Next</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup