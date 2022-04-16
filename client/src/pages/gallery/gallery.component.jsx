import React, {Suspense, useEffect} from "react";
import { Outlet, } from "react-router-dom";
import { connect, useDispatch  } from 'react-redux';
import {store} from '../../redux/store';
import { createStructuredSelector } from 'reselect';
import {selectAllArtworks} from '../../redux/gallery/gallery.selectors';

import {fetchGalleryAsync} from '../../redux/gallery/gallery-thunks'

import { GalleryContainer } from "./gallery.styles";
import useArtworkList from '../../hooks/helper-hooks';

const CollectionPreviewElement = React.lazy(()=> import("../../components/collection-preview-element/collection-preview-element.component"));


const GalleryPage = ({artworks, fetchGalleryAsync}) => {
  // const dispatch = useDispatch();

 useEffect(()=>{
  // dispatch(fetchGalleryAsync());
  fetchGalleryAsync()
 },[]);

  // const artworks = store.getState().gallery.allArtworks

    return (
      <Suspense fallback={<div>Wczytywanie...</div>}>

        <GalleryContainer>
            {Object.keys(artworks).map((category, index) => {
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

const mapStateToProps = createStructuredSelector({
  artworks:selectAllArtworks
});

const mapDispatchToProps = dispatch => ({
  fetchGalleryAsync: ()=> dispatch(fetchGalleryAsync()),

});


export default connect(mapStateToProps,mapDispatchToProps)(GalleryPage)

