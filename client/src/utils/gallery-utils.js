// // import axios from 'axios';
import {axiosInstance} from '../config.js';


export const getCategoryArtworks = (artworks,category) => {
    return artworks[category]
};

export const getCategoryPreview = (artworks, category) => {
    return artworks[category].slice(0,1)
};
export const fetchGallery = async () => {
    const galleryData = await axiosInstance.get(`/api/artwork`);
    const convertedData = convertGallery(galleryData.data); 
    return convertedData;
}

export const convertGallery = (artworks) => {
    const newGallery = {};
    const categories = [...new Set(artworks.map(artwork => artwork.category))];
    categories.forEach(category=>newGallery[category]={});
    for (let category in newGallery) {
        const categoryArtworks = artworks.filter(function(artwork){
            return artwork.category === category
        })
        newGallery[category] = categoryArtworks
    }
 return newGallery

}

