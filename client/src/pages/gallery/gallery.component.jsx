import React, {Suspense, useEffect} from "react";
import { Outlet, } from "react-router-dom";
import { useSelector, useDispatch, useState } from 'react-redux';
import {store} from '../../redux/store';
// import {fetchGallery} from '../../redux/gallery/gallery.actions';
import {fetchGalleryAsync} from '../../redux/gallery/gallery-thunks'

import { GalleryContainer } from "./gallery.styles";
import useArtworkList from '../../hooks/helper-hooks';

const CollectionPreviewElement = React.lazy(()=> import("../../components/collection-preview-element/collection-preview-element.component"));



const GalleryPage = () => {
  const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(fetchGalleryAsync());

 },[])


// const artworks = []
const artworks = store.getState().gallery.allArtworks




  return (
    <Suspense fallback={<div>Wczytywanie...</div>}>

      <GalleryContainer>
          {Object.keys(artworks).map((category, index) => {
            console.log('artworks', artworks)
            return (
              <Suspense key={index} fallback={<div>Wczytywanie...</div>}>
                <CollectionPreviewElement
                  key={index}
                  category={category}
                  artworks={artworks}
                />
                </Suspense>
            );
          })}
          <Outlet />
      </GalleryContainer>
      </Suspense>

  );
};


export default GalleryPage

