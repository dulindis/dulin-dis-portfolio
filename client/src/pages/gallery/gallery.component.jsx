import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,Link , Outlet, matchPath} from "react-router-dom";

import { GalleryContainer } from "./gallery.styles";
// import {fetchGalleryStart} from '../../redux/gallery/gallery.actions';
import axios from "axios";
// import  CollecionOverview from '../../components/collection-overview/collection-overview.component';
import { getCategoryPreview } from "../../utils/utils";
import CollectionPreviewElement from "../../components/collection-preview-element/collection-preview-element.component";
import { selectCollection } from "../../redux/gallery/gallery.selectors";


import { connect } from 'react-redux';
import {setGallery, setCurrentCategory} from '../../redux/gallery/gallery.actions'


const GalleryPage = ({setGallery,setCurrentCategory}) => {
  const [artworks, setArtworks] = useState({});

  const getData = async (url) => {
    const abortCont = new AbortController();
    await axios.get(url,{signal:abortCont.signal}).then((res) =>setArtworks(res.data));
    return () => abortCont.abort()
  };

  useEffect(() => {
    getData("http://localhost:8080/api/artwork");
    setGallery(artworks)
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  setGallery: (artworks) => dispatch(setGallery(artworks)),
  setCurrentCategory: (category) => dispatch(setCurrentCategory(category))
})


export default connect(null, mapDispatchToProps)(GalleryPage);




              {/* <Link to={`/${category}`}> */}
              {/* </Link> */}



// {/* collectionPreviewItems.map(({ id, title }) => {
//   console.log("title:", title);

//   return (
//     <div>
//       {/* <h2>{title}</h2> */}
//       <div> {title}</div>
//     </div>
//   );
// }); */}
