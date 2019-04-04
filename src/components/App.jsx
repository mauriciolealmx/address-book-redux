import React from 'react';
import Header from './Header/header.container';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
