import React, { useState } from 'react'
import { Button } from '@material-ui/core'

const ProfilePic = ({ first, setFirst, last, setLast, username, setUsername, password, setPassword }) => {
  
  const [profilePic, setProfilePic] = useState('')

  const onSubmit = async(el) => {
    el.preventDefault()
    const user = {
      firstName: first,
      lastName: last,
      username: username,
      password: password,
      profilePic: profilePic
    }
    const token = (await axios.post('/route/signup', user)).data
    console.log(token)
  }
  return (
    <div className="forms-container">
      <div className="forms">
        <form onSubmit={onSubmit}>
          <div className="form">
            <div className="credentials-container">
              <div className="credential">
                <p>Profile Pic</p>
                <input type="file" accept="image/*" name="profile pic"/>
              </div>
            </div>
            <Button type="submit" color="primary" variant="contained">Register</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePic