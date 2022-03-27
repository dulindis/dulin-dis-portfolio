import React from "react";
import {
  CollectionPreviewElementContainer,
  CollectionPreviewImage,
} from "./collection-preview-element.styles";
// import {connect} from 'react-redux';
import { CollecionOverview } from "../collection-overview/collection-overview.container";
import { getCategoryPreview } from "../../utils/utils";
import { Link } from "react-router-dom";


import { connect } from 'react-redux';
import {setGallery, setCurrentCategory} from '../../redux/gallery/gallery.actions'


const CollectionPreviewElement = ({ artworks,category, setCurrentCategory }) => {
    
     const collectionPreviewItems = getCategoryPreview(artworks, category);

    return(
        // <Link to={`/gallery/${category}`} artworks={artworks} category={category}>
        <CollectionPreviewElementContainer   CollectionPreviewElementContainer>
            <h1>{category}</h1>
            {collectionPreviewItems.map(({ id, title }) => {
            return (
                <div key={id}>
                <Link to={`${category}`} artworks={artworks} category={category} onClick={()=>setCurrentCategory(category)}>
                <CollectionPreviewImage>
                    <img src="https://www.w3schools.com/css/paris.jpg" />
                </CollectionPreviewImage>
                </Link>
                <p>{title}</p>
                </div>
            );
            })}
            </CollectionPreviewElementContainer>
        // </Link>
);}


const mapDispatchToProps = (dispatch) => ({
    setCurrentCategory: (category) => dispatch(setCurrentCategory(category))
  })
  

// export default connect(mapStateToProps)(CollectionPreviewElement);
export default connect(null,mapDispatchToProps)(CollectionPreviewElement);


{/* <Link to={`/gallery/${category}`} artworks={artworks} category={category} onClick={()=>setCurrentCategory(category)}> */}
