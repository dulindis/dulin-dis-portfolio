import { createSelector } from 'reselect';

// const selectGallery = state => state.gallery;
const selectGallery = state => state.gallery;


export const selectGalleryArtworks = createSelector(
  [selectGallery],
  gallery => gallery.gallery
);

export const selectCategories = createSelector(
  [selectGallery],
  gallery => gallery.categories
);


export const fetchCurrentCategory = createSelector(
  [selectGallery],
  gallery => gallery.currentCategory
);


export const selectCollectionsForPreview = createSelector(
    [selectCategories],
    collections =>
      collections ? Object.keys(collections).map(key => collections[key]) : []
  );


  export const selectCategory = collectionUrlParam =>
  createSelector(
    [selectGallery],
    gallery => (gallery ? gallery[collectionUrlParam] : null)
  );