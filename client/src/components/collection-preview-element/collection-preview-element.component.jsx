import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import {store} from '../../redux/store';
// import { createStructuredSelector } from 'reselect';

// import {selectAllArtworks} from '../../redux/gallery/gallery.selectors';


import { getCategoryPreview } from "../../utils/utils";
import { Link, useLocation } from "react-router-dom";

import {
  setCurrentCategory,
} from "../../redux/gallery/gallery.actions";




const CollectionPreviewElement = ({category}) => {
  const [wideClass, setWideClass] =useState(false);
  const artworks = store.getState().gallery.allArtworks;
// const artworks=selectAllArtworks()
  let { pathname } = useLocation();
  const collectionPreviewItems = getCategoryPreview(artworks, category);
  const dispatch = useDispatch();

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    console.log('img data',offsetHeight, offsetWidth);
    if (offsetWidth>=offsetHeight) {
      setWideClass(true)
    }
  };
  

  return (
    <div className="collection-preview-element">
      <h3 className="small-title category-title" id="category-title">{category}</h3>
      {collectionPreviewItems.map(({ id, url }) => {
        return (
          <div key={id} className='category-preview-box'>
            <Link
              to={`${pathname}/${category}`}
              artworks={artworks}
              category={category}
              onClick={()=>dispatch(setCurrentCategory({category:category, artworks:artworks[category]}))}
            >
              <div className={`collection-preview-img `}>
                <img         
                onLoad={onImgLoad} 
                className={`${wideClass? 'wide' : ""}`}
                src={url}/>
              </div>
            </Link>
             {/* <p>{title}</p> */}
          </div>
        );
      })}
    </div>
  );
};



// const mapStateToProps = createStructuredSelector({
//   artworks:selectAllArtworks
// })
export default CollectionPreviewElement
