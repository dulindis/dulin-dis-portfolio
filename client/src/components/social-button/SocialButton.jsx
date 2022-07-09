import React from 'react';
import HelmetMetaData from "../helmet-meta-data/HelmetMetaData";
import {RiShareForwardFill, RiShareForwardLine} from 'react-icons/ri';


const SocialButton = ({title, currentUrl, description, imageUrl}) => {
  return (
    <span>
        <HelmetMetaData title={title} currentUrl={currentUrl} description={description} imageUrl={imageUrl}>
            <RiShareForwardLine/>
        </HelmetMetaData>
    </span>
  )
}

export default SocialButton