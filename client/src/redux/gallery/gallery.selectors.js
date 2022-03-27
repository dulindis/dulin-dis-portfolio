import { createSelector } from 'reselect';

// const selectGallery = state => state.gallery;
const selectGallery = state => state.gallery;

// const selectCollections = state => state.gallery.collections;

// export const selectCollections = createSelector(
//     [selectGallery],
//     gallery => gallery.gallery
// );

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
  

  
  // export const selectCollection = collectionUrlParam =>
  //   createSelector(
  //     [selectCategories],
  //     collections => (collections ? collections[collectionUrlParam] : null)
  //   );

  export const selectCategory = collectionUrlParam =>
  createSelector(
    [selectGallery],
    gallery => (gallery ? gallery[collectionUrlParam] : null)
  );