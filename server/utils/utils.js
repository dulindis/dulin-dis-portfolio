// import axios from 'axios';
const fetch = require('node-fetch');
const { resolve } = require("path");

function getArtworksByCategory (artworks,category){
    const categoryArtworks = artworks.filter(function(artwork){
        return artwork.category === category
    })
    return categoryArtworks
}

function getCategories  (artworks) {
    const categories = [...new Set(artworks.map(artwork => artwork.category))];
    return categories; 
}

const getFakeUrl = () =>{
    return fetch("https://dog.ceo/api/breeds/image/random", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=>res.json()).then(res=> {
        if (res.status=="success") {
            return res.message
        } else {
           return new Error('something went wrong')
        }
    })
}

// const convertArtworkUrlToBase64 = () => {
//     console.log('im working')
// }
// const convertArtworkUrlToBase64 = async (artworkUrl) => {
//     // await fetch(artworkUrl).then(r => r.buffer()).then(buf => `data:image/${type};base64,`+buf.toString('base64'));

//     // const imageUrlData = await fetch(artworkUrl);
//     // const blob = await imageUrlData.arrayBuffer(); 
//     // const imageBase64=`data:${response.headers.get("content-type")};base64,${Buffer.from(blob).toString("base64")}`;
//     // console.log('imgbase64',imageBase64);

//     // return imageBase64

// }
const convertArtworkUrlToBase64 = async (artworkUrl) => {
    const imageUrl = artworkUrl;
    const imageUrlData = await fetch(imageUrl);
    const buffer = await imageUrlData.arrayBuffer();
    const stringifiedBuffer = Buffer.from(buffer).toString('base64');
    const contentType = imageUrlData.headers.get('content-type');
    const imageBase64 = 
    `data:image/${contentType};base64,${stringifiedBuffer}`;
    return imageBase64
};

// function  convertArtworkUrlToBase64 (artworkUrl) {
//     return fetch(`${artworkUrl}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//     }).then(res=>res.json()).then(res=>res.arrayBuffer()).then(res=>Buffer.from(res).toString('base64')).then(res=>{
//         const contentType = imageUrlData.headers.get('content-type');
//         const imageBas64 = 
//         `data:image/${contentType};base64,${stringifiedBuffer}`;
//         console.log('imgbase64',imageBase64);
//         return imageBas64
//     }).then(res=>res ? res : new Error('soething went terribly wrong'))

// };



function convertData (categories,artworks){
    const newData = {};
    for (const category of categories) {
        newData[category]=getArtworksByCategory(artworks,category)
    }
    return newData
}

module.exports = {
    convertData:convertData,
    getCategories:getCategories,
    getFakeUrl:getFakeUrl,
    convertArtworkUrlToBase64:convertArtworkUrlToBase64
}