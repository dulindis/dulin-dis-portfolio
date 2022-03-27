import React from 'react'
import { useParams } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import {selectCategory} from '../../redux/gallery/gallery.selectors';

function CategoryPage() {
  // const {categoryItems} = useParams()
  const {category} = useParams();
  return (
    <CollectionOverview />
  )
}



const mapStateToProps = (state,ownProps) =>({
  categoryItem:selectCategory(ownProps.match.params.category)(state)
})
export default CategoryPage