import React,{useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
import {selectCurrentCategory,selectArtwork} from '../../redux/gallery/gallery.selectors';

// import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
// import {selectCurrentCategory,selectArtwork} from '../../redux/gallery/gallery.selectors';


function ArtworkComponent({artwork,currentCategory}) {
  const [currentArtwork, setCurrentArtwork] = useState([]);  
  const {title,url} = currentArtwork
  const {artworkId} = useParams();

  let navigate = useNavigate ();
  let {pathname} = useLocation();

  useEffect(()=>{
    const currArtwork = artwork(artworkId)
    setCurrentArtwork(currArtwork);
  },[])
 
  const getCurrentPathWithoutLastPart = () => pathname.slice(0, pathname.lastIndexOf('/'))

  return (
    <>
    <h1>im an artwork with id: {artworkId}</h1>
    <div>
      <h1>ty title is: {title}</h1>
      <img src={url} alt={currentArtwork.title}/>
    </div>
    <button onClick={()=>{
    navigate(`${getCurrentPathWithoutLastPart()}`)
    }}>back to {currentCategory.category}</button>

    </>
  )
}

const mapStateToProps = (state) =>({
  currentCategory:selectCurrentCategory(state),
  artwork:id => selectArtwork(id)(state)
})

export default connect(mapStateToProps)(ArtworkComponent)