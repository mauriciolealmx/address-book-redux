import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { LOGIN } from '../Auth/paths.config';

export default WrappedComponent => {
  class RequireLogin extends Component {
    componentWillMount() {
      if (!this.props.auth.token) {
        this.props.history.push(LOGIN);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth
  });

  return connect(mapStateToProps)(withRouter(RequireLogin));
};
