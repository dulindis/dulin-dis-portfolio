import React from 'react';
import NoFoundImg from '../../assets/not-found.svg';

const NotFound = () => {
  return (
    <div className="not-found">
    <p className='not-found-text'>Page not found.</p>
    <p className='not-found-text'>404</p>

      <figure className='not-found-picture'>
      <img src={NoFoundImg} alt="not-found-picture"/>
      </figure>
    </div>
  )
}

export default NotFound
