import {setGallery} from './gallery.actions';
import {convertGallery} from '../../utils/utils';
import axios from 'axios';
import {config} from '../../config';


export function fetchGalleryAsync(dispatch) {
    return function (dispatch) {
      axios.get(
        `${config.SERVER_URI}api/artwork`
        ).then(
        res=> {const convertedData = convertGallery(res.data); return convertedData}).then(data=>dispatch(setGallery(data)))
        .catch(error=>{console.log(error);return error.status})







    };
  }
  

  // axios.request(options).catch(function(error) {
  //   if (!error.status) {
  //     // network error
  //   }
  // });