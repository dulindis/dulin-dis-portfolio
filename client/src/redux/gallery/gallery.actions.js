import axios from "axios";
import GalleryActionTypes from './gallery.types';

//thunk for a full gallery fetch
export function fetchGallery() {
  return function (dispatch) {
    const abortCont = new AbortController();

    return axios.get("http://localhost:8080/api/artwork", {
        signal: abortCont.signal
      })
      .then(({
        data
      }) => {
        dispatch(setGallery(data));
      });
  };
}

// gallery setting action
export const setGallery = (gallery) => {
  return {
    type: GalleryActionTypes.SET_GALLERY,
    payload: gallery
  }
}

//current category setting function
export const setCurrentCategory = (category) => ({
  type: GalleryActionTypes.SET_CURRENT_CATEGORY,
  payload: category
})