import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  selectCurrentCategory,
  selectArtwork,
} from "../../redux/gallery/gallery.selectors";
import Button from '../../components/button/button.component';
import Modal from "../../components/modal/modal.component";
// import Modal from '../../components/modal/modal.component';

function ArtworkComponent({ artwork, currentCategory }) {
  const [currentArtwork, setCurrentArtwork] = useState([]);
  
  const { title, url, technique, size, description } = currentArtwork;
  const { artworkId } = useParams();

  const [wideClass, setWideClass] =useState(false);


  let navigate = useNavigate();
  let { pathname } = useLocation();

  useEffect(() => {
    const currArtwork = artwork(artworkId);
    setCurrentArtwork(currArtwork);
  }, []);

  const [showModal,setShowModal]=useState(false);
  const toggleModal = () => {
    setShowModal(prev=>!prev)
  }

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    console.log('img data',offsetHeight, offsetWidth);
    if (offsetWidth>=offsetHeight) {
      setWideClass(true)
    }
  };


  const getCurrentPathWithoutLastPart = () =>
    pathname.slice(0, pathname.lastIndexOf("/"));

  return (
    <div className="artwork-page">
      <div className="artwork-container">
        <div className="artwork-image" onClick={toggleModal}>
         
            <img onLoad={onImgLoad} 
                className={`${wideClass? 'wide' : ""}`}
                src={url} alt={title}/>
        </div>

        <div className="artwork-description">
          <h3 className="artwork-title">"{title}"</h3>
          <p className="artwork-parameter">{size}</p>
          <p className="artwork-parameter">{technique}</p>
          <p className={`artwork-parameter description`}>{description}</p>

        </div>
        <Button className="button" btnColor='rgb(95, 93, 90)' labelColor="rgb(240, 240, 240)" theme='commonStyles'  onClick={() => {
            navigate(`${getCurrentPathWithoutLastPart()}`);
          }}> back to {currentCategory.category}</Button>

        {/* <button
          onClick={() => {
            navigate(`${getCurrentPathWithoutLastPart()}`);
          }}
        >
          back to {currentCategory.category}
        </button> */}
      </div>
     {/* < Modal/> */}
     <Modal showModal={showModal} 
    //  setShowModal={setShowModal} 
    toggleModal={toggleModal}
     src={url} alt={title} className={`${wideClass? 'wide' : ""}`}
/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentCategory: selectCurrentCategory(state),
  artwork: (id) => selectArtwork(id)(state),
});

export default connect(mapStateToProps)(ArtworkComponent);

