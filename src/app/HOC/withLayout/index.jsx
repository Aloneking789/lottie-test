import Menubar from './../../Components/Menubar'
import React from 'react';
import './Layout.css';

const withLayout = (WrappedComponent) => {
  const withLayout = (props) => {
    return(
      <div className='app-container'>
        <Menubar/>
        <div className='body-class'>
          <WrappedComponent {...props}/>
        </div>
      </div>
    )
  };

  return withLayout;
};

export default withLayout;