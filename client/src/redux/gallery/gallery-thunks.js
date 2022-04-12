import {fetchGallery,setGallery} from './gallery.actions';
import {convertGallery} from '../../utils/utils';
import apiClient from '../../apiClient';


import axios from 'axios';

// export const fetchGalleryAsync = () =>  (dispatch) =>{
//   // dispatch(fetchGallery);

//   const abortCont = new AbortController();
//   apiClient().get('artwork', {
//     signal: abortCont.signal
//   }).then(galleryData=>{
//     console.log('gallery data', galleryData);
//     return dispatch(setGallery(galleryData))
//   })

// }
  


export function fetchGalleryAsync() {
    return function (dispatch) {
      axios.get('http://localhost:8080/api/artwork').then(
        res=>{ 
          const convertedData = convertGallery(res.data);
      dispatch(setGallery(convertedData));})

    };
  }
  