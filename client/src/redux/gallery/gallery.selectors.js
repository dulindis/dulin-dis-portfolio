import { createSelector } from 'reselect';

//selects and returns all data fetched from api
const selectAllGalleryData = state => state.gallery;

//selects and returns all artworks from all categories
export const selectAllArtworks = createSelector(
  [selectAllGalleryData],
  allData => allData.allArtworks
)

//selects and returns all artworks from all categories
export const selectGalleryArtworks = createSelector(
  [selectAllGalleryData],
  allData => allData.gallery
);


//returns currently selected  category
export const selectCurrentCategory = createSelector(
  [selectAllGalleryData],
  allData =>allData.currentCategory
)

//selects and returns currently selected artwork from the selected category
export const selectArtwork = id => createSelector(
  [selectCurrentCategory],
  categoryArtworks =>   categoryArtworks.artworks.filter(artwork=> artwork.id===id)[0]
)
export const appError = createSelector(
  [selectAllGalleryData],
  allData=>allData.appError
)