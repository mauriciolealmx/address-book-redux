import React from 'react';
import RequireLogin from './hocs/requireLogin';

const Welcome = () => {
  return <div>Welcome to Address-book</div>;
};

export default RequireLogin(Welcome);
