import React from 'react';

// import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    {/* <Profiler id="directory" onRender={(id,phase,actualDuration)=>{console.log({id,phase,actualDuration})}}> */}
      {/* <Directory /> */}
    {/* </Profiler> */}
    <h1>page title</h1>
    <h2>author</h2>
  </HomePageContainer>
);

export default HomePage;
