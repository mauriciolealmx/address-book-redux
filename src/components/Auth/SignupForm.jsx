import React, { Component } from 'react';
import AuthForm from './AuthForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
  onSubmit = ({ email, password }) => {
    this.props.signup({ email, password }, () => {
      this.props.history.push('/feature');
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
