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
    getFakeUrl:getFakeUrl
}