import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SigninForm extends Component {
  onSubmit = ({ email, password }) => {
    this.props.signin({ email, password }, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    return (
      <div>
        <h3>Sign In</h3>
        <AuthForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(SigninForm);
