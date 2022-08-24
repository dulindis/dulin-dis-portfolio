import React, { Suspense, useEffect } from "react";
// import { Outlet, } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllArtworks } from "../../redux/gallery/gallery.selectors";
import HelmetMetaData from '../../components/helmet-meta-data/helmet-meta-data';
import { fetchGalleryAsync } from "../../redux/gallery/gallery-thunks";
import Loader from "../../components/loader/loader.component";

const CollectionPreviewElement = React.lazy(() =>
  import(
    "../../components/collection-preview-element/collection-preview-element.component"
  )
);

const GalleryPage = ({ artworks }) => {

  useEffect(() => {
    fetchGalleryAsync();
  }, []);

  return (
      <div className="gallery">
            <HelmetMetaData title='Art Gallery - Dulin Dís'></HelmetMetaData>

        <h2>GALLERY</h2>
        <Suspense fallback={<Loader/>}>

        <div className="gallery-container">
          {Object.keys(artworks).map((category, index) => {
            return (
              
                <CollectionPreviewElement
                  key={index}
                  category={category}
                  artworks={artworks}
                />
              
            );
          })}
          {/* <Outlet /> */}
        </div>
        </Suspense>

      </div>
  );
};

const mapStateToProps = createStructuredSelector({
  artworks: selectAllArtworks,
});



export default connect(mapStateToProps)(GalleryPage);
