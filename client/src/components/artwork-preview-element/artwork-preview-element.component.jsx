import React from "react";
// import {TileContainer} from './artwork-preview-element-styles';
import "./artwork-preview-element.styles.scss";
import { LightgalleryItem } from "react-lightgallery";


const ArtworkPreviewElement = ({ title,url }) => {
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

