import React from "react";
import { useDispatch } from 'react-redux';
import {store} from '../../redux/store';



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

  let { pathname } = useLocation();
  const collectionPreviewItems = getCategoryPreview(artworks, category);
  const dispatch = useDispatch();



  return (
    <CollectionPreviewElementContainer CollectionPreviewElementContainer>
      <h2>{category}</h2>
      {collectionPreviewItems.map(({ id, title,url }) => {
        console.log('ct prev data', collectionPreviewItems)
        return (
          <div key={id}>
            <Link
              to={`${pathname}/${category}`}
              artworks={artworks}
              category={category}
              onClick={()=>dispatch(setCurrentCategory({category, artworks:artworks[category]}))}
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


export default CollectionPreviewElement
