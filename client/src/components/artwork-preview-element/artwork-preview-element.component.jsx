import React from "react";
// import "./artwork-preview-element.styles.scss";
import { LightgalleryItem } from "react-lightgallery";
import { useLocation, useNavigate } from "react-router-dom";


const ArtworkPreviewElement = ({artwork}) => {
  const {url, title, id} = artwork;
  let { pathname } = useLocation();
  let navigate = useNavigate();

  return (
    <div className="masonry_tile"
    onClick={() =>navigate(`${pathname}/${id}`)}>
      <figure>
        <picture>
        {/* <LightgalleryItem group="any" src={url}> */}
          <img src={url} alt={title}/>
        {/* </LightgalleryItem> */}
        </picture>
      </figure>
      <figcaption className="atrwork-title">{title}</figcaption>
    </div>

  );
};

export default ArtworkPreviewElement;

