import React, {Suspense} from "react";
import { connect } from "react-redux";
// import "./collection-overview.styles.scss";
import Masonry from "react-masonry-css";
import Button from '../button/button.component';
import {generateBreakPoints} from './lightGalleryBreakpoints';

import { useNavigate } from "react-router-dom";

 import {selectCurrentCategory} from '../../redux/gallery/gallery.selectors';
// import ArtworkPreviewElement from "../artwork-preview-element/artwork-preview-element.component";
const ArtworkPreviewElement = React.lazy(()=> import("../artwork-preview-element/artwork-preview-element.component"))


const CollectionOverview = ({currentCategory}) => {
  const {artworks, category} = currentCategory;

  // let { pathname } = useLocation();
  let navigate = useNavigate();

  return (
    <div className="collection-overview">
      <h2 className="medium-title">{category}</h2>
      <Masonry
        breakpointCols={generateBreakPoints(artworks.length)}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {artworks.map((artwork, index) => {
          
          return(


          <Suspense key={index} fallback={<div>Wczytywanie...</div>}>
          <ArtworkPreviewElement
            key={index}
            artwork={artwork}
            >
            
{/* <Link to={`${pathname}/${artwork.id}`}/> */}

            </ArtworkPreviewElement>
          </Suspense>
         

        )})}
      </Masonry>

      {/* <button onClick={() => navigate("/gallery")}>back to gallery</button> */}
        {/* <Button className="button" btnColor='grey' theme='outline' onClick={() => navigate("/gallery")}>back to gallery</Button> */}
        <Button className="button" btnColor='rgb(95, 93, 90)' labelColor="rgb(240, 240, 240)" theme='commonStyles' onClick={() => navigate("/gallery")}>back to gallery</Button>

      {/* </GridContainer> */}
    </div>
  );
};

const mapStateToProps = state => ({
  currentCategory:selectCurrentCategory(state)
})

export default connect(mapStateToProps)(CollectionOverview);

