import React from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from '../../../styles/LoginForm';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../../../styles/login.style.scss';

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
      <div className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleMouseDownPassword}>
            <TextField 
                className="log"
                id="filled-basic"
                variant="filled"
                label="Email Address"
                name="email"
                style={{marginBottom:'2rem'}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MailOutlineIcon />
                        </InputAdornment>
                    ),
                }}
            />
          <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          <Button type="submit" style={{backgroundColor:' #5F2EEA',color:'#ffffff',borderRadius:'16px',fontWeight:'600',width:'325px'}} className="btn btn-login mt-4 py-3">Login</Button>
        </form>
      </div>
  );
}