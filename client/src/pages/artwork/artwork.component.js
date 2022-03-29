import React from 'react';
import { useSelector } from 'react-redux';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
// import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import {selectCategory} from '../../redux/gallery/gallery.selectors';


function ArtworkComponent() {
  const {artworkId} = useParams();
  let navigate=useNavigate ();
  const category = useSelector(state=>state.gallery.currentCategory)

  let {pathname} = useLocation();
  const getCurrentPathWithoutLastPart = () => {
    
    return pathname.slice(0, pathname.lastIndexOf('/'))
}

  return (
    <>
    <h1>im an artwork with id: ${artworkId}</h1>
    <button onClick={()=>navigate(`${getCurrentPathWithoutLastPart()}`)}>back to {category}</button>

    </>
  )
}

export default ArtworkComponent