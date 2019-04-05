import Header from './Header';
import styles from './header.styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

const enhanced = compose(
  withRouter,
  withStyles(styles)
)(Header);

export default connect(mapStateToProps)(enhanced);
