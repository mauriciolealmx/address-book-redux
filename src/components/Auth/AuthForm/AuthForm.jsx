import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/core';

import styles from './AuthFrom.styles';

class SigninForm extends Component {
  state = { email: '', password: '', showPassword: false };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper classes={{ root: classes.root }}>
          <Typography
            component="h1"
            variant="h5"
            style={{ textAlign: 'center', padding: '35px' }}
          >
            {this.props.title}
          </Typography>
          <form onSubmit={this.onSubmit}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              margin="normal"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div>{this.props.errorMessage}</div>
            <Button
              color="primary"
              fullWidth
              onClick={this.onSubmit}
              variant="outlined"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SigninForm);
