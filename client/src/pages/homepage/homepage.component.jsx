// import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Sign} from '../../assets/dulin-dis-sign-v-grey.svg'

const HomePage = () => (
  <div className='home-page'>
  {/* <div className="component-container"> */}
  {/* <h1 className="homepage-title">dulin dís art</h1> */}
  <div className='sign-container'>
  <Sign className="sign"/>
  </div>
  

  {/* </div> */}
    {/* <Profiler id="directory" onRender={(id,phase,actualDuration)=>{console.log({id,phase,actualDuration})}}> */}
      {/* <Directory /> */}
    {/* </Profiler> */}
    {/* <h1 className='main-page-title-big'>dulin dís</h1>
    <div className="logo-title " >
    </div>
    <h2 className='main-page-title-medium'>art portfolio</h2> */}
  </div>
);

export default HomePage;
