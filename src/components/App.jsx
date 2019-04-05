import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

import Header from './Header/header.container';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser(() => {
      this.props.history.push('/welcome');
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(App));
