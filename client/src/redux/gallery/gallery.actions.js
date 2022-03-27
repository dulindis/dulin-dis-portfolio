import GalleryActionTypes from './gallery.types';

// export const fetchGallery = (galleryMap) => ({
//     type:GalleryActionTypes.SET_GaLLERY,
//     payload:galleryMap
// });

export const fetchGallery = () => ({
    type:GalleryActionTypes.FETCH_GALLERY});

export const setGallery = (gallery) => ({
    type:GalleryActionTypes.SET_GALLERY,
    payload:gallery
});


export const fetchCategories = (categoriesMap) => ({
    type:GalleryActionTypes.SET_COLLECTIONS,
    payload: categoriesMap
});



// export const fetchCurrentCategory = (category) => ({
//     type:GalleryActionTypes.SET_CATEGORY_ARTWORKS,
//     payload: category
// })


export const setCurrentCategory = (category) => ({
    type:GalleryActionTypes.SET_CURRENT_CATEGORY,
    payload: category
})