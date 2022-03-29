import React from 'react'
import { useParams } from 'react-router-dom';
// import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import {selectCategory} from '../../redux/gallery/gallery.selectors';


function ArtworkComponent() {
  const {artworkId} = useParams()
  return (
    <h1>im an artwork with id: ${artworkId}</h1>
  )
}
const mapStateToProps = (state,ownProps) =>({
  categoryItem:selectCategory(ownProps.match.params.category)(state)
})
export default ArtworkComponent