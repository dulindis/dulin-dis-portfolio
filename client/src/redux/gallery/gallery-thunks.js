import {setGallery} from './gallery.actions';
import {convertGallery} from '../../utils/utils';
import axios from 'axios';
// const dispatch = useDispatch();


export function fetchGalleryAsync(dispatch) {
    return function (dispatch) {
      axios.get(
        // 'http://localhost:8080/api/artwork'
        'api/artwork'
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