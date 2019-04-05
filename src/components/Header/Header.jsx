import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
  handleClick(path) {
    this.props.history.push(path);
  }

  renderButtons() {
    if (!this.props.auth.token) {
      return (
        <React.Fragment>
          <Button onClick={() => this.handleClick('/signin')} color="inherit">
            Sign In
          </Button>
          <Button onClick={() => this.handleClick('/signup')} color="inherit">
            Sign Up
          </Button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button onClick={() => this.handleClick('/signout')} color="inherit">
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
