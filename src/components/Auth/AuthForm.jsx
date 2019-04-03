import React, { Component } from 'react';

class SigninForm extends Component {
  state = { email: '', password: '' };

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password});
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign in!</button>
      </form>
    );
  }
}

export default SigninForm;
