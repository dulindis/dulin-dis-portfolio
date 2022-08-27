import { axiosInstance, configs } from "../../config";
import axios from 'axios';
import { convertGallery } from "../../utils/gallery-utils";
import { fetchGalleryFailure, fetchGalleryRequest, fetchGallerySuccess } from "./gallery.actions";


//  export default function  fetchGalleryAsync (){
//   return (dispatch) => {
//    dispatch( fetchGalleryRequest());

//     axiosInstance.get(`/api/artwork`)
//       .then(galleryData=>convertGallery(galleryData.data))
//       .then(readyGallery=>dispatch(fetchGallerySuccess(readyGallery)))
//       .catch(error=> { console.log('error', error);  dispatch(fetchGalleryFailure(error))})
//   }
// }

// export default fetchGalleryAsync


export const fetchGalleryAsync = () =>(
  async (dispatch) => {
    dispatch(fetchGalleryRequest());
  
    try {
      const galleryData = await axiosInstance.get(`/api/artwork`);
      // const galleryData = await axios.get(`${configs[process.env.NODE_ENV]}/api/artwork`);

      const convertedData = await convertGallery(galleryData.data); 
      console.log('convertedData',convertedData)
      dispatch(fetchGallerySuccess(convertedData))
    } 
    catch (error) {
      console.log('error',error);
      dispatch(fetchGalleryFailure(error))    
    };

  }
)




// export const fetchGalleryAsync = () => {
//   return function (dispatch) {
//     dispatch(fetchGalleryRequest());
//     axiosInstance.get(`/api/artwork`)
//         .then(galleryData=>{
//         const convertedData = convertGallery(galleryData.data); 
//         console.log('convertedData',convertedData)
//         dispatch(fetchGallerySuccess(convertedData));
//       })
//       .catch(error=>{
//         console.log('error:',error);
//         dispatch(fetchGalleryFailure(error))
//       });
//   }

// }
  



//  export const fetchGalleryAsync = () =>(
//   async (dispatch) => {
//     dispatch(fetchGalleryRequest());
  
//     try {
//       const galleryData = await axiosInstance.get(`/api/artwork`);
//       const convertedData = await convertGallery(galleryData.data); 
//       console.log('convertedData',convertedData)
//       dispatch(fetchGallerySuccess(convertedData))
//     } 
//     catch (error) {
//       console.log('error',error);
//       dispatch(fetchGalleryFailure(error))    
//     };

//   }
// )



// export const  fetchGalleryAsync = () => {
//     return function (dispatch) {
//       dispatch(fetchGalleryRequest());
//       axiosInstance.get(`/api/artwork`)
//         .then(galleryData=>{
//           const convertedData = convertGallery(galleryData.data); 
//           console.log('converted gal:', convertedData); 
//           return convertedData
//         })
//         .then(readyGallery=>dispatch(fetchGallerySuccess(readyGallery)))
//         .catch(error=>{console.log('error:',error);dispatch(fetchGalleryFailure(error.message))})
//     }
//   }
  
  // store.subscribe(()=>console.log(store.getState()));
  // store.dispatch(fetchGalleryAsync());


// export const  fetchGalleryAsync = () => {
//   return (dispatch) => {
//     axiosInstance.get(`/api/artwork`)
//       .then(galleryData=>convertGallery(galleryData.data))
//       .then(readyGallery=>dispatch(setGallery(readyGallery)))
//       .catch(error=> { console.log('error', error); return dispatch(fetchGalleryFailure(error))})
//   }
// }





// export const  fetchGalleryAsync = () => (dispatch) => {
//   axiosInstance.get(`/api/artwork`).then(galleryData=>convertGallery(galleryData.data)).then(readyGallery=>dispatch(setGallery(readyGallery)))
// }



  // {
  // const galleryData =  axiosInstance.get(`/api/artwork`);
  // console.log('gallerydata',galleryData)
  // return (dispatch) => {
  //   galleryData.then(galleryData=>convertGallery([...galleryData.data]) ).then(readyGallery=>{console.log('ready gallery',readyGallery);dispatch(setGallery(readyGallery))})
  // }






// export function fetchGalleryAsync () {
//   const galleryData =  axiosInstance.get(`/api/artwork`);
//   console.log('gallerydata',galleryData)
//   return (dispatch) => {
//     galleryData.then(galleryData=>convertGallery([...galleryData.data]) ).then(readyGallery=>{console.log('ready gallery',readyGallery);dispatch(setGallery(readyGallery))})
//   }
// }



//  export const fetchGalleryAsync = () =>(
//   async (dispatch) => {
//     let readyGallery;

//     try {
//       const galleryData = await axiosInstance.get(`/api/artwork`);
//       const convertedData = convertGallery(galleryData.data); 
//       readyGallery=convertedData;
//     } 
//     catch (error) {
//       console.log('error',error);
//       ;return error    
//     };

//     dispatch(setGallery(readyGallery));
//   }
// )



//usunelam z nawiazu dispatch
// export function fetchGalleryAsync(dispatch) {
//   return async dispatch => {
//     try {
//       const galleryData = await axiosInstance.get(`/api/artwork`);
//       const convertedData = convertGallery(galleryData.data); 
//       dispatch(setGallery(convertedData));
//     } catch (error) {
//       console.log('error',error);
//       ;return error    }

//   } 

// }



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