import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Button, 
  InputLabel,
  Input,
  Select, 
  FormControl,
  MenuItem 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2)
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}))

const ProfileConfig = ({ first, setFirst, last, setLast, username, setUsername, password, setPassword }) => {
  
  const classes = useStyle()
  const [profilePic, setProfilePic] = useState('')
  const [gender, setGender] = useState('')
  const [open, setOpen] = useState(false)

  const handleChange = (el) => {
    setGender(el.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSubmit = async(el) => {
    el.preventDefault()
    const user = {
      firstName: first,
      lastName: last,
      username: username,
      password: password,
      profilePic: profilePic
    }
    const token = (await axios.post('/route/v1/signup', user)).data
    console.log(token)
  }

  return (
    <div className="forms-container">
      <FormControl className={classes.formControl}>
        <InputLabel>Gender</InputLabel>
        <Select
          labelId="labelGender"
          id="gender"
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          value={gender}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Gender</em>
          </MenuItem>
          <MenuItem value={1}>Cis Male</MenuItem>
          <MenuItem value={2}>Trans Male</MenuItem>
          <MenuItem value={3}>Cis Female</MenuItem>
          <MenuItem value={4}>Trans Female</MenuItem>
          <MenuItem value={5}>Non Binary</MenuItem>
          <MenuItem value={6}>Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Profile Pic</InputLabel>
        <Input type="file"/>
      </FormControl>
      <Link to="/profile">
        <Button type="submit" color="primary" variant="contained">
          Register
        </Button>
      </Link>
    </div>
  )
}

export default ProfileConfig