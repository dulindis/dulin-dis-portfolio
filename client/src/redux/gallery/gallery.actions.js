import GalleryActionTypes from './gallery.types';

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
});

