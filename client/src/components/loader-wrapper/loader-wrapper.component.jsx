import React from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Loader from '../loader/loader.component';
const LoaderWrapper = () => {
  return (
    <div className='loader-wrapper'>
        <Loader/>
    </div>
  )
}

export default LoaderWrapper