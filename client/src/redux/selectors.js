import { createSelector } from 'reselect';

// const selectGallery = (state) => state.gallery;

// const selectCategories = (state) => {
//     let categories = state.gallery.map(artwork => artwork.category)
//     const filteredCategories = (categories, category) => categories.reduce((prev, curr) => prev.find(a => a[category] === curr[category]) ? prev : prev.push(curr) && prev, []);
//     return filteredCategories
// };

// export const selectArtworks = createSelector(
//   [selectGallery],
//   (gallery) => gallery.gallery //?
// );

