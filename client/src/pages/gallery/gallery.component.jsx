import React from "react";
import { Outlet, } from "react-router-dom";

import { GalleryContainer } from "./gallery.styles";
import CollectionPreviewElement from "../../components/collection-preview-element/collection-preview-element.component";

import { useSelector, useDispatch } from 'react-redux';
import {fetchGallery} from '../../redux/gallery/gallery.actions'


const GalleryPage = () => {
  const artworks = useSelector(state=>state.gallery.gallery)
  const dispatch = useDispatch();
  
  dispatch(fetchGallery)

  return (
      <GalleryContainer>
          {Object.keys(artworks).map((category, index) => {
            return (
                <CollectionPreviewElement
                  key={index}
                  category={category}
                  artworks={artworks}
                />
            );
          })}
          <Outlet />
      </GalleryContainer>

  );
};


export default GalleryPage

