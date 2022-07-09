import React,{useState} from "react";
// import "./artwork-preview-element.styles.scss";
// import { LightgalleryItem } from "react-lightgallery";
import { useLocation, useNavigate } from "react-router-dom";
import SocialButton from "../social-button/SocialButton";
import HelmetMetaData from "../helmet-meta-data/HelmetMetaData";
import SocialModal from "../social-modal/SocialModal";
import {RiShareForwardLine} from 'react-icons/ri';

const ArtworkPreviewElement = ({artwork,category}) => {
  const {url, title, id, description} = artwork;
  const[ chosenArtwork, setChosenArtwork ] = useState({});
  const [showModal, setShowModal]=useState(false);
  let { pathname } = useLocation();
  let navigate = useNavigate();

const toggleModal = e => {
  setShowModal(!showModal);
}

  return (
    <div className="masonry_tile"
    // onClick={() =>navigate(`${pathname}/${id}`)}
    >
    {console.log(`${pathname}/${id}`)}
      <HelmetMetaData title={category} currentUrl={`${pathname}/${id}`} imageUrl={url}></HelmetMetaData>
  
        <div key={id} className="figure">
        {/* <picture> */}
        
          <img src={url} alt={title}/>
          <div className="cover"></div>
                
        {/* </picture> */}
        
        <p className="artwork-title">"{title}"</p>

      </div>
      <RiShareForwardLine style={{color:'white'}}onClick={toggleModal}/>

      {showModal ? 
        <SocialModal 
          className={`social-modal`} 
          artwork={artwork} 
          artworkPageUrl={`${pathname}/${id}`}
          showModal={showModal}  
          setShowModal={setShowModal}

          /> : ''
      
      }

    </div>

  );
};

export default ArtworkPreviewElement;


{/* 
 */}


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

