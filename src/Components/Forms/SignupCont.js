import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Button, 
  InputLabel,
  Input,
  TextField,
  Select, 
  FormControl,
  MenuItem 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { 
  MuiPickersUtilsProvider,
  KeyboardDatePicker 
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

const useStyle = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    maxWidth: 100,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    maxWidth: 200,
  },
  input: {
    margin: theme.spacing(1),
    minWidth: 416,
    maxWidth: 416
  },
  
}))

const SignupCont = ({ first, setFirst, last, setLast, username, setUsername, password, setPassword }) => {
  
  const classes = useStyle()
  const [gender, setGender] = useState('')
  const [open, setOpen] = useState(false)
  const [profilePic, setProfilePic] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleGender = (el) => {
    setGender(el.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDate = (date) => {
    setSelectedDate(date)
  } 

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
    <div>
      <form autoComplete="off">
        <div className="formBulk">
          <FormControl className={classes.formControl}>
            <InputLabel>Gender</InputLabel>
            <Select
              labelId="labelGender"
              id="gender"
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              value={gender}
              onChange={handleGender}
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
          <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker 
                disableToolbar
                varient="dialog"
                format="MM/DD/YYYY"
                id="date-picker"
                label="Date of birth"
                value={selectedDate}
                onChange={handleDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </div>
        
        <FormControl className={classes.input}>
          <InputLabel>Profile Pic</InputLabel>
          <Input type="file" />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Link to="/profile" className={classes.button}>
            <Button type="submit" color="primary" variant="contained" >
              Register
            </Button>
          </Link>
        </FormControl>
      </form>
    </div>
  )
}

export default SignupCont