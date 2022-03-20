// import axios from 'axios';


// const getData = async (url,action) => {
//     await axios.get(url).then(res=> console.log('fetched artworks', res.data));

// };


function getArtworksByCategory (artworks,category){
    const categoryArtworks = artworks.filter(function(artwork){
        return artwork.category === category
    })
    console.log(category,categoryArtworks)
    return categoryArtworks
}


function getCategories  (artworks) {
    const categories = [...new Set(artworks.map(artwork => artwork.category))];
    // console.log('categories', categories);
    return categories;
    
}


function convertData (categories,artworks){
    const newData = {};
    for (const category of categories) {
        // newData[category]={}
        newData[category]=getArtworksByCategory(artworks,category)
    }
    return newData
}


module.exports = {
    convertData:convertData,
    getCategories:getCategories}


// export const convertData = (artworks) => {

//     // const sortedArtworks = [];
//     const categories = [...new Set(artworks.map(artwork => artwork.category))];
//     console.log('categories', categories);
//     const convertedData = {};
//     for (const category in categories) {
//         const artworks = getArtworksByCategory(artworks, category);
//         // return {
//         //     category:artworks
//         // }
//         convertedData.category=artworks
//     }
//     // return categories
//     console.log('convertedData', convertedData);

//     return convertedData
//     // const artworks.reduce((acc,d)=>{
//     //     const found = acc.find(a=>a.category===d.category);
//     //     const value = {value:d.value,}
//     // })
//     // return{}
// }

// export default 