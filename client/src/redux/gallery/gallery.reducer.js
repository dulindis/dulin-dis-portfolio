import GalleryActionTypes from './gallery.types.js';


const INITIAL_STATE = {
    gallery: [],
    categories: []
};


export const galleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GalleryActionTypes.SET_GALLERY:
            return {
                ...state,
                gallery: action.payload
            }
            default:
                return state
    }
}

export default galleryReducer