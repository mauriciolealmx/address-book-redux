import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

import styles from './AuthFrom.styles';

class SigninForm extends Component {
  state = { email: '', password: '' };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
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
              autoComplete="email"
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              onChange={event => this.setState({ email: event.target.value })}
              value={this.state.email}
            />
            <TextField
              autoComplete="current-password"
              fullWidth
              label="Password"
              margin="normal"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              type="password"
              value={this.state.password}
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
