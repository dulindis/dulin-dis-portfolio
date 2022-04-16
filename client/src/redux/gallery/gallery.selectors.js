import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';


const selectAllGalleryData = state => state.gallery;



const selectCurrentCategory = state => state.gallery.currentCategory;



export const selectAllArtworks = createSelector(
  [selectAllGalleryData],
  allData => allData.allArtworks
)

export const selectGalleryArtworks = createSelector(
  [selectAllGalleryData],
  allData => allData.gallery
);

// export const selectCategories = createSelector(
//   [selectAllGalleryData],
//   allData => allData.categories
// );

export const fetchCurrentCategory = createSelector(
  [selectAllGalleryData],
  allData => allData.currentCategory
);


// export const selectCategoriesForPreview = createSelector(
//     [selectCategories],
//     categories =>
//     categories ? Object.keys(categories).map(key => categories[key]) : []
// );

// // v1
// // export const selectCategoryArtworks = collectionUrlParam =>
// //   createSelector(
// //     [selectGalleryArtworks],
// //     gallery => (gallery ? gallery[collectionUrlParam] : null)
// // );

export const selectCategoryArtworks = createSelector(
    [selectGalleryArtworks, fetchCurrentCategory],
    (gallery,category) => (gallery ? gallery[category] : null)
);

export const selectArtwork = id => createSelector(
  [selectCategoryArtworks],
  categoryArtworks => categoryArtworks.filter(artwork=> artwork.id===id)
)