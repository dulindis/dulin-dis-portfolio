import axios from "axios";
import GalleryActionTypes from './gallery.types';
import apiClient from '../../apiClient';
import { setGallery } from "./gallery.actions";


// export function fetchGallery() {
//     return async function (dispatch) {
//       const abortCont = new AbortController();
//       const galleryData = await apiClient().get('artwork', {
//         signal: abortCont.signal
//       });
//       console.log('thunk galleryData:', galleryData)

//       dispatch(setGallery(galleryData))
  
//     };
//   }

export const  fetchGallery = () =>  (dispatch) =>{
  dispatch({type:GalleryActionTypes.FETCH_GALLERY});

  const abortCont = new AbortController();
  apiClient().get('artwork', {
    signal: abortCont.signal
  }).then(galleryData=>{
    console.log('gallery data', galleryData);
    return dispatch(GalleryActionTypes.SET_GALLERY)
  })

}
  


// export function fetchGallery() {
//     return function (dispatch) {
//       const abortCont = new AbortController();
//       return apiClient().get('artwork', {
//           signal: abortCont.signal
//         })
//         .then(({
//           data
//         }) => {        console.log('data from fetch:', data)
  
//           dispatch(setGallery(data));
//           console.log('data from fetch:', data)
//         });
//     };
//   }
  