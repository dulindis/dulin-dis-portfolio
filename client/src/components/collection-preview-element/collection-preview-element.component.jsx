import React from "react";
import { useDispatch } from 'react-redux';


import {
  CollectionPreviewElementContainer,
  CollectionPreviewImage,
} from "./collection-preview-element.styles";
import { getCategoryPreview } from "../../utils/utils";
import { Link, useLocation } from "react-router-dom";

import {
  setCurrentCategory,
} from "../../redux/gallery/gallery.actions";




const CollectionPreviewElement = ({category,artworks}) => {
  
  let { pathname } = useLocation();
  const collectionPreviewItems = getCategoryPreview(artworks, category);
  const dispatch = useDispatch();

  return (
    <CollectionPreviewElementContainer CollectionPreviewElementContainer>
      <h2>{category}</h2>
      {collectionPreviewItems.map(({ id, title }) => {
        return (
          <div key={id}>
            <Link
              to={`${pathname}/${category}`}
              artworks={artworks}
              category={category}
              onClick={()=>dispatch(setCurrentCategory(category))}
            >
              <CollectionPreviewImage>
                <img src="http://via.placeholder.com/800x600/C72B41/800834"/>
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
