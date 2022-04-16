import React from "react";
import { useDispatch } from 'react-redux';
import {store} from '../../redux/store';
import { createStructuredSelector } from 'reselect';

import {selectAllArtworks} from '../../redux/gallery/gallery.selectors';


import {
  CollectionPreviewElementContainer,
  CollectionPreviewImage,
} from "./collection-preview-element.styles";
import { getCategoryPreview } from "../../utils/utils";
import { Link, useLocation } from "react-router-dom";

import {
  setCurrentCategory,
} from "../../redux/gallery/gallery.actions";




const CollectionPreviewElement = ({category}) => {
  const artworks = store.getState().gallery.allArtworks;
// const artworks=selectAllArtworks()
  let { pathname } = useLocation();
  const collectionPreviewItems = getCategoryPreview(artworks, category);
  const dispatch = useDispatch();



  return (
    <CollectionPreviewElementContainer CollectionPreviewElementContainer>
      <h2>{category}</h2>
      {collectionPreviewItems.map(({ id, title,url }) => {
        return (
          <div key={id}>
            <Link
              to={`${pathname}/${category}`}
              artworks={artworks}
              category={category}
              onClick={()=>dispatch(setCurrentCategory({category:category, artworks:artworks[category]}))}
            >
              <CollectionPreviewImage>
                <img src={url}/>
              </CollectionPreviewImage>
            </Link>
             {/* <p>{title}</p> */}
          </div>
        );
      })}
    </CollectionPreviewElementContainer>
  );
};



const mapStateToProps = createStructuredSelector({
  artworks:selectAllArtworks
})
export default CollectionPreviewElement
