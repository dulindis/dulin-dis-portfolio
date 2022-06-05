import React, { Suspense, useEffect } from "react";
// import { Outlet, } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllArtworks } from "../../redux/gallery/gallery.selectors";

import { fetchGalleryAsync } from "../../redux/gallery/gallery-thunks";
// import { GalleryContainer } from "./gallery.styles";

const CollectionPreviewElement = React.lazy(() =>
  import(
    "../../components/collection-preview-element/collection-preview-element.component"
  )
);

const GalleryPage = ({ artworks, fetchGalleryAsync }) => {
  useEffect(() => {
    fetchGalleryAsync();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="gallery">
        <h2>GALLERY</h2>
        <div className="gallery-container">
          {Object.keys(artworks).map((category, index) => {
            return (
              <Suspense key={index} fallback={<div>Loading...</div>}>
                <CollectionPreviewElement
                  key={index}
                  category={category}
                  artworks={artworks}
                />
              </Suspense>
            );
          })}
          {/* <Outlet /> */}
        </div>
      </div>
    </Suspense>
  );
};

const mapStateToProps = createStructuredSelector({
  artworks: selectAllArtworks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGalleryAsync: () => dispatch(fetchGalleryAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
