import React from 'react';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
 import {CollectionOverviewContainer, GridContainer} from './collection-overview.styles';
 import { createStructuredSelector } from 'reselect';
 import {selectCollection, fetchCurrentCategory, selectCategory} from '../../redux/gallery/gallery.selectors';


const CollectionOverview = ({currentCategory}) => {
    // const categoryItems = artworks[category]
return (

    <CollectionOverviewContainer>
            <h2>{currentCategory}  category content </h2>
                <GridContainer>
                       


                </GridContainer>
    </CollectionOverviewContainer>
  
)
}

const mapStateToProps = createStructuredSelector({
//  currentCategory: state.gallery.currentCategory
//  categoryArtworks

currentCategory: fetchCurrentCategory,
// artworks: selectCategory()
}); 

export default connect(mapStateToProps)(CollectionOverview);
// export default CollectionOverview


// { 
                            
//     categoryItems.map((galleryItem,index)=>{
//     return (
//         <div key={index} className={`image image-${index+1}`}>
//             {/* <Link to={`/gallery/${galleryItem.id}`} key={index}>            */}
//             <Link to={`/gallery/${category}`} key={index}>          
//         <img src={`/gallery/${galleryItem.pictureUrl}.jpg`} alt={`${galleryItem.title}`}/></Link>
//         </div>
//         );
//     })
// }                    
