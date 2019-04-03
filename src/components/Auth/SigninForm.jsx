import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import AuthForm from './AuthForm';

class SigninForm extends Component {
  onSubmit = ({ email, password }) => {
    this.props.signin({ email, password }, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    return <AuthForm title="Sign In" onSubmit={this.onSubmit} />;
  }
}

export default connect(
  null,
  actions
)(SigninForm);
