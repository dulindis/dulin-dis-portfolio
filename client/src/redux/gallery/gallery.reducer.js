import GalleryActionTypes from './gallery.types.js';


const INITIAL_STATE = {
    allArtworks: {},
    categories: [],
    // currentCategory:'',
    currentCategory:{}
};


export const galleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GalleryActionTypes.FETCH_GALLERY: 
            return state;
        case GalleryActionTypes.SET_GALLERY:
            return {
                ...state,
                allArtworks: action.payload
            };
            
        case GalleryActionTypes.SET_COLLECTIONS:
            return {
                ...state,
                categories:action.payload
            };

        case GalleryActionTypes.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory:action.payload
            };
        case GalleryActionTypes.FETCH_GALLERY_FAILURE:
            return {
                ...state,
                allArtworks:action.payload
            }

        default:
             return state
    }
}

export default galleryReducer