import React, { useEffect, useState } from "react";
// import {TileContainer} from './artwork-preview-element-styles';
import "./artwork-preview-element.styles.scss";

// const randomImgs=[]
const ArtworkPreviewElement = ({ title }) => {
  const [randomImgSrc, setRandomImg] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => setRandomImg(res.message));
    // async function fetchData(){
    //   const res = await fetch('https://picsum.photos/v2/list');
    //   const json = await res.json();
    //   randomImgs(json);
    //   console.log(randomImgs)
    // }
    // fetchData()
  }, []);

  return (
    // <TileContainer className="tile">
    <div className="masonry_tile">
      <figure>
        <picture>
          <img src={randomImgSrc} alt={title}></img>
        </picture>
      </figure>
      <figcaption className="title">{title}</figcaption>
    </div>

    // </TileContainer>
  );
};

export default ArtworkPreviewElement;

// getRandomImg(randomImgs).download_url
