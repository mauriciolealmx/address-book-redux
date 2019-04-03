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
    return (
      <div>
        <h3>Sign up</h3>
        <AuthForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signup);
