import * as actions from '../../actions';
import { connect } from 'react-redux';

const Signout = props => {
  props.signout(() => {
    props.history.push('/signin');
  });
  return null;
};

export default connect(
  null,
  actions
)(Signout);
