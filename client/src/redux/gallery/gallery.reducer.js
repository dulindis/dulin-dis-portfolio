import GalleryActionTypes from './gallery.types.js';


const INITIAL_STATE = {
    gallery: {},
    categories: [],
    currentCategory:''
};


export const galleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GalleryActionTypes.FETCH_GALLERY: 
            return {
                ...state
            };
            break;
        case GalleryActionTypes.SET_GALLERY:
            return {
                ...state,
                gallery: action.payload
            };
            break;
            
        case GalleryActionTypes.SET_COLLECTIONS:
            return {
                ...state,
                categories:action.payload
            };break;

        case GalleryActionTypes.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory:action.payload
            };break;


        default:
             return state
    }
}

export default galleryReducer