import GalleryActionTypes from './gallery.types';

export const fetchGallery = (galleryMap) => ({
    type:GalleryActionTypes.SET_GaLLERY,
    payload:galleryMap
})