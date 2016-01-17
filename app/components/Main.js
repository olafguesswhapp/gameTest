import React from 'react';
import TopBar from './TopBar';

const Main = ({children, history}) => {
  return (
    <div className="main-container">
      <TopBar />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Main