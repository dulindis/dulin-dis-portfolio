import React from 'react';
import { connect,useSelector } from 'react-redux';
import { useParams,useNavigate,useLocation } from 'react-router-dom';
// import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import {fetchCurrentCategory,selectArtwork} from '../../redux/gallery/gallery.selectors';


function ArtworkComponent({artwork}) {
  const {artworkId} = useParams();
  let navigate=useNavigate ();
  const category = useSelector(state=>state.gallery.currentCategory)
  // const category = fetchCurrentCategory()

  console.log('curr cat', category)
  let {pathname} = useLocation();
  const getCurrentPathWithoutLastPart = () => {
    
    return pathname.slice(0, pathname.lastIndexOf('/'))
}

  return (
    <>
    <h1>im an artwork with id: ${artwork(artworkId)}</h1>
    <button onClick={()=>navigate(`${getCurrentPathWithoutLastPart()}`)}>back to {category}</button>

    </>
  )
}

const mapStateToProps = (state) =>({
  artwork:id=>selectArtwork(id)
})

export default connect(mapStateToProps)(ArtworkComponent)