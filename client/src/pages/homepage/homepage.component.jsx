import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const HomePage = () => (
  <div className='home-page'>
    {/* <Profiler id="directory" onRender={(id,phase,actualDuration)=>{console.log({id,phase,actualDuration})}}> */}
      {/* <Directory /> */}
    {/* </Profiler> */}
    <h1 className='main-page-title-big'>dulin dís</h1>
    <div className="logo-title " >
      {/* <Logo className="logo-image" /> */}
    </div>
    <h2 className='main-page-title-medium'>art portfolio</h2>
  </div>
);

export default HomePage;
