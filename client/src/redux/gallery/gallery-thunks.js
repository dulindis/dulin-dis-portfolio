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
        res=>{ 
          const convertedData = convertGallery(res.data);
          console.log('convertedData',convertedData)
          dispatch(setGallery(convertedData));}
      ).catch(error=>{console.log(error);return error.status})

    };
  }
  

  // axios.request(options).catch(function(error) {
  //   if (!error.status) {
  //     // network error
  //   }
  // });