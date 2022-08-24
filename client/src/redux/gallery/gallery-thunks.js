import {setGallery} from './gallery.actions';
import {convertGallery} from '../../utils/utils';
import {axiosInstance} from '../../config.js';


export function fetchGalleryAsync(dispatch) {
  return async dispatch => {
    try {
      const galleryData = await axiosInstance.get(`/api/artwork`);
      const convertedData = convertGallery(galleryData.data); 
      dispatch(setGallery(convertedData));
    } catch (error) {
      console.log('error',error);
      ;return error    }

  } 


  
}



// export function fetchGalleryAsync(dispatch) {
//     return function (dispatch) {
//       axios.get(
//         `${axiosInstance.SERVER_URI}/api/artwork`
//         ).then(
//         res=> {
//           console.log('process.env.NODE_ENV:', process.env.NODE_ENV, "config.SERVER_URI", axiosInstance.SERVER_URI)

//           const convertedData = convertGallery(res.data); 
//           return convertedData}).then(data=>dispatch(setGallery(data))
//           )
//         .catch(error=>{
//           console.log(error);return error.status
//         })

//     };
//   }
  

  // axios.request(options).catch(function(error) {
  //   if (!error.status) {
  //     // network error
  //   }
  // });