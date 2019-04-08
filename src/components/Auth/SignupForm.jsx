import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AuthForm from './AuthForm/AuthForm';

class Signup extends Component {
  onSubmit = ({ email, password }) => {
    this.props.signup({ email, password }, () => {
      this.props.history.push('/welcome');
    });
  };

  render() {
    return <AuthForm title="Sign Up" onSubmit={this.onSubmit} />;
  }
}

export default connect(
  null,
  actions
)(Signup);
