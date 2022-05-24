import React from "react";
// import "./artwork-preview-element.styles.scss";
// import { LightgalleryItem } from "react-lightgallery";
import { useLocation, useNavigate } from "react-router-dom";


const ArtworkPreviewElement = ({artwork}) => {
  const {url, title, id} = artwork;
  let { pathname } = useLocation();
  let navigate = useNavigate();

  return (
    <div className="masonry_tile"
    onClick={() =>navigate(`${pathname}/${id}`)}>
      <div className="figure">
        {/* <picture> */}
          <img src={url} alt={title}/>
          <div className="cover"></div>
        {/* </picture> */}
        
        <p className="artwork-title">{title}</p>
      </div>
    </div>

  );
};

export default ArtworkPreviewElement;




// <figure>
//       <picture> 
//         <img src={url} alt={title}/>
//         <div className="cover"></div>
//       </picture>
         
//         <figcaption className="artwork-title">{title}</figcaption>
//       </figure>

// <figure>
// <picture>
// {/* <LightgalleryItem group="any" src={url}> */}
//   <img src={url} alt={title}/>
// {/* </LightgalleryItem> */}
// </picture>
// <figcaption className="artwork-title">{title}</figcaption>

// </figure>

