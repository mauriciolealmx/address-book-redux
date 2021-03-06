import { connect } from 'react-redux';

import * as actions from '../../actions';
import { LOGIN } from './paths.config';

const Signout = props => {
  props.signout(() => {
    props.history.push(LOGIN);
  });
  return null;
};

export default connect(
  null,
  actions
)(Signout);
