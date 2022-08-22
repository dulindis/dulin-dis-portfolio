import {setGallery} from './gallery.actions';
import {convertGallery} from '../../utils/utils';
import axios from 'axios';

export function fetchGalleryAsync() {
    return function (dispatch) {
      axios.get(
        // 'http://localhost:8080/api/artwork'
        '/artwork'
        ).then(
        res=>{ 
          const convertedData = convertGallery(res.data);
      dispatch(setGallery(convertedData));})

    };
  }
  