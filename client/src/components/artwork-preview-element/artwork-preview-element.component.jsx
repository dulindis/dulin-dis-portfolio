import React, { useEffect, useState } from "react";
// import {TileContainer} from './artwork-preview-element-styles';
import "./artwork-preview-element.styles.scss";
import { LightgalleryItem } from "react-lightgallery";


// const randomImgs=[]
const ArtworkPreviewElement = ({ title,url }) => {
  const [randomImgSrc, setRandomImg] = useState('');
  console.log('url', url)

  return (
    <div className="masonry_tile">
      <figure>
        <picture>
        <LightgalleryItem group="any" src={url}>
          <img src={url} alt={title}/>
        </LightgalleryItem>
        </picture>
      </figure>
      <figcaption className="title">{title}</figcaption>
    </div>

  );
};

export default ArtworkPreviewElement;

// getRandomImg(randomImgs).download_url
