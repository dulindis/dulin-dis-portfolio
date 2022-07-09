import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HelmetMetaData from "../helmet-meta-data/HelmetMetaData";
import SocialModal from "../social-modal/SocialModal";
import {RiShareForwardLine} from 'react-icons/ri';

const ArtworkPreviewElement = ({artwork,category}) => {
  const {url, title, id, description} = artwork;
  const [showModal, setShowModal]=useState(false);
  let { pathname } = useLocation();
  let navigate = useNavigate();

  const toggleModal = e => {
    setShowModal(!showModal);
  };

  return (
    <div className="masonry_tile">
        <HelmetMetaData title={category} currentUrl={`${pathname}/${id}`} imageUrl={url} description={description}></HelmetMetaData>

        <div key={id} className="figure"  onClick={(e) =>{
           const hasClass = e.target.classList.contains("cover");
            console.log('is a figure?', hasClass);

           if (e.target.classList.contains("cover")) {
           
            navigate(`${pathname}/${id}`)}}
        }
           >
          <img src={url} alt={title}/>
          <div className="cover">
            <p className="artwork-title">"{title}"</p>
            <RiShareForwardLine className="share-icon"   onClick={toggleModal}/>
          </div>         

        </div>
        
      {showModal ? 
        <SocialModal 
          artwork={artwork} 
          artworkPageUrl={`${pathname}/${id}`}
          toggleModal={toggleModal}
          showModal={showModal}  
          /> : ''
      }
    </div>
  );
};

export default ArtworkPreviewElement;

