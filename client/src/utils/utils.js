// // import axios from 'axios';


// // const getData = async (url,action) => {
// //     await axios.get(url).then(res=> console.log('fetched artworks', res.data));

// // };

export const getCategoryArtworks = (artworks,category) => {
    return artworks[category]
}

//working one
// export const getCategoryPreview = (artworks, category) => {
//     const categoryPreview = artworks[category].slice(0,1)
//     return categoryPreview;
// }

export const getCategoryPreview = (artworks, category) => {
    return getCategoryArtworks(artworks,category).slice(0,1)
}



