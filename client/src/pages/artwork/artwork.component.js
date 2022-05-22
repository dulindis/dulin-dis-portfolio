import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  selectCurrentCategory,
  selectArtwork,
} from "../../redux/gallery/gallery.selectors";

// import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
// import {selectCurrentCategory,selectArtwork} from '../../redux/gallery/gallery.selectors';

function ArtworkComponent({ artwork, currentCategory }) {
  const [currentArtwork, setCurrentArtwork] = useState([]);
  const { title, url, technique, size, description } = currentArtwork;
  const { artworkId } = useParams();

  let navigate = useNavigate();
  let { pathname } = useLocation();

  useEffect(() => {
    const currArtwork = artwork(artworkId);
    setCurrentArtwork(currArtwork);
  }, []);

  const getCurrentPathWithoutLastPart = () =>
    pathname.slice(0, pathname.lastIndexOf("/"));

  return (
    <div className="artwork-page">
      <div className="artwork-container">
        <div className="artwork-image">
          <img src={url} alt={title} />
        </div>

        <div className="artwork-description">
          <h1 className="artwork-title">"{title}"</h1>
          <p className="artwork-parameter">{size}</p>
          <p className="artwork-parameter">{technique}</p>
          <p className={`artwork-parameter description`}>{description}</p>

        </div>
        <button
          onClick={() => {
            navigate(`${getCurrentPathWithoutLastPart()}`);
          }}
        >
          back to {currentCategory.category}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentCategory: selectCurrentCategory(state),
  artwork: (id) => selectArtwork(id)(state),
});

export default connect(mapStateToProps)(ArtworkComponent);
