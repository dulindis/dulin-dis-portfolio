import axios from "axios";
import GalleryActionTypes from './gallery.types';
import apiClient from '../../apiClient';

//thunk for a full gallery fetch

// export function fetchGallery() {
//   return function (dispatch) {
//     const abortCont = new AbortController();
//     return apiClient().get('artwork', {
//         signal: abortCont.signal
//       })
//       .then(({
//         data
//       }) => {        console.log('data from fetch:', data)

//         dispatch(setGallery(data));
//         console.log('data from fetch:', data)
//       });
//   };
// }

export const fetchGallery = () => {
  return {
    type: GalleryActionTypes.FETCH_GALLERY
  }
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