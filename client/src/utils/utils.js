// // import axios from 'axios';


// // const getData = async (url,action) => {
// //     await axios.get(url).then(res=> console.log('fetched artworks', res.data));

// // };


export const getCategoryPreview = (category) => {
    const categoryPreview = category.slice(0,2)
    return categoryPreview;
}

