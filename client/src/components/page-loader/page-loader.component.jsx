import React from 'react';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Loader from '../loader/loader.component';
const PageLoader = () => {
  return (
    <div className='page-wrapper'>
        <Loader/>
    </div>
  )
}

export default PageLoader