import React, {Suspense} from "react";
import { useSelector } from "react-redux";

import "./collection-overview.styles.scss";
import Masonry from "react-masonry-css";

import { useLocation, useNavigate } from "react-router-dom";

import { getCategoryArtworks } from "../../utils/utils.js";

// import ArtworkPreviewElement from "../artwork-preview-element/artwork-preview-element.component";
const ArtworkPreviewElement = React.lazy(()=> import("../artwork-preview-element/artwork-preview-element.component")) 


const CollectionOverview = () => {
  const currentCategory = useSelector((state) => state.gallery.currentCategory);
  const categoryItems=currentCategory.artworks

  // let { pathname } = useLocation();
  let navigate = useNavigate();


   let breakpoints2 = 0;
  if (categoryItems.length>0 && categoryItems.length<4) {
    breakpoints2={
      default: categoryItems.length,
      1100: 2,
      700: 1,
    };
  } else {
    breakpoints2={
      default: 4,
      1100: 2,
      700: 1,
    };
  }

  return (
    <div className="collection-overview">
      <h2>{currentCategory.category}</h2>
      <Masonry
        breakpointCols={breakpoints2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        
      >
        {categoryItems.map((artwork, index) => {
          
          console.log('artwork fro cat', artwork)
          return(


          <Suspense key={index} fallback={<div>Wczytywanie...</div>}>
          <ArtworkPreviewElement
            title={artwork.title}
            key={index}
            url={artwork.url}
            >
            
{/* <Link to={`${pathname}/${artwork.id}`}/> */}

            </ArtworkPreviewElement>
          </Suspense>
         

        )})}
      </Masonry>

      <button onClick={() => navigate("/gallery")}>back to gallery</button>

      {/* </GridContainer> */}
    </div>
  );
};

export default CollectionOverview;

// {/* <Link to={`${pathname}/${artwork.id}`}>
//   {/* <h1 key={index}>{artwork.title}</h1> */}
//   <ArtworkPreviewElement title={artwork.title} />
// </Link> */}

//       <div className="collection-overview {">
//   <h2>{currentCategory}</h2>
//   {/* <GridContainer> */}
//   <div className="grid-container masonry-with-columns ">
//     {categoryItems.map((artwork, index) => (
//       <ArtworkPreviewElement title={artwork.title} >
//       <Link to={`${pathname}/${artwork.id}`}/>
//       </ArtworkPreviewElement>

//     ))}
//   </div>
//   <button onClick={() => navigate("/gallery")}>back to gallery</button>

//   {/* </GridContainer> */}
// </div>



          {/* <ArtworkPreviewElement
            title={artwork.title}
            key={index}

          >
            <Link to={`${pathname}/${artwork.id}`} />
          </ArtworkPreviewElement> */}


          
//           <Link to={`${pathname}/${artwork.id}`} >
//           <ArtworkPreviewElement
//             title={artwork.title}
//             url={`${pathname}/${artwork.id}`}
//             key={index}/>
// </Link>
    