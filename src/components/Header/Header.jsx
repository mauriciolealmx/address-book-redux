import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LOGIN, SIGNUP, SIGNOUT } from '../Auth/paths.config';

class Header extends Component {
  handleClick(path) {
    this.props.history.push(path);
  }

  renderButtons() {
    if (!this.props.auth.token) {
      return (
        <React.Fragment>
          <Button onClick={() => this.handleClick(LOGIN)} color="inherit">
            Log In
          </Button>
          <Button onClick={() => this.handleClick(SIGNUP)} color="inherit">
            Sign Up
          </Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button onClick={() => this.handleClick(SIGNOUT)} color="inherit">
            Logout
          </Button>
        </React.Fragment>
      );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Address Book
            </Typography>
            {this.renderButtons()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Header;
