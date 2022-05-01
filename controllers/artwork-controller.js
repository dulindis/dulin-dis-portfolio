'use strict';
const firebase = require('../db');
const Artwork = require('../models/artwork');
const {convertData,getCategories,getFakeUrl} = require('../utils/utils');
const firestore = firebase.firestore();

const  addArtwork = async (req,res, next) =>{
    try {
        const data = req.body;
        // const artwork = await firestore.collection('artworks').doc().set(data);
        await firestore.collection('artworks').doc().set(data);
        res.send('record saved successfully');
    } catch (error) {
       res.status(400).send(error.message)
    }
}


//getallartworks in proper format - real urls
const getAllArtworks = async (req,res,next) =>{
    try {
        const artworks =  await firestore.collection('artworks');
        const data = await artworks.get()
        const artworksArray = [];
        if(data.empty){
            res.status(404).send('no artworks found')
        } else {
            data.forEach(doc=>{
                // console.log(doc.data());
                // const url = getFakeUrl();
                // console.log('url from inside ge artworks', url);
                const artwork = new Artwork(
                    doc.id,
                    doc.data().title,
                    doc.data().description,
                    doc.data().size,
                    doc.data().technique,
                    doc.data().category,
                    doc.data().available,
                    doc.data().url
                )
                artworksArray.push(artwork)
        });


        const categories =    await getCategories(artworksArray);
        const convertedData = await convertData(categories,artworksArray);
        console.log('conv daa:',convertedData);
        const finalData = await Promise.all(
            artworksArray, categories, convertData
        ).then((finalArtworks)=>{
            console.log('DATA_FINAL:',finalArtworks);
            res.send(finalArtworks)
        })
    ; 


        // const categories =  getCategories(artworksArray);
        // const convertedData = convertData(categories,artworksArray);
        // res.send(convertedData)

        // res.send(artworksArray)
        }
     
    } catch (error){
        res.status(400).send(error.message)

    }
}



//getallartworks in proper format- fake urls
// const getAllArtworks = async (req,res,next) =>{
//     try {
//         const artworks =  await firestore.collection('artworks');
//         const data = await artworks.get()
//         const artworksArray = [];
//         if(data.empty){
//             res.status(404).send('no artworks found')
//         } else {
//             data.forEach(doc=>{
//                 // console.log(doc.data());
//                 // const url = getFakeUrl();
//                 // console.log('url from inside ge artworks', url);
//                 const artwork = new Artwork(
//                     doc.id,
//                     doc.data().title,
//                     doc.data().description,
//                     doc.data().size,
//                     doc.data().technique,
//                     doc.data().category,
//                     doc.data().available,
//                     doc.data().url
//                     // doc.data().url
//                 )
//                 artworksArray.push(artwork)
//         });

//         let  artworksArrayWithFakeUrls=[...artworksArray];
//         artworksArrayWithFakeUrls = artworksArrayWithFakeUrls.map(async artwork=>{
//             let newUrl = await getFakeUrl();
//             artwork.url = newUrl;
//             return artwork

//             //   return getFakeUrl().then(fakeUrl=> {artwork.url=fakeUrl; return artwork})

//             // doc.url = newUrl;
//             // return doc

//         });

//         const categories =    await getCategories(artworksArrayWithFakeUrls);
//         const convertedData = await convertData(categories,artworksArrayWithFakeUrls);
//         // console.log('conv daa:',convertedData);
//         const finalData = await Promise.all(
//             artworksArrayWithFakeUrls, categories, convertData
//         ).then((finalArtworks)=>{
//             console.log('DATA_FINAL:',finalArtworks);
//             res.send(finalArtworks)
//         })
//     ; 


//         // const categories =  getCategories(artworksArray);
//         // const convertedData = convertData(categories,artworksArray);
//         // res.send(convertedData)

//         // res.send(artworksArray)
//         }
     
//     } catch (error){
//         res.status(400).send(error.message)

//     }
// }





//getAll working version
// const getAllArtworks = async (req,res,next) =>{
//     try {
//         const artworks =  await firestore.collection('artworks');
//         const data = await artworks.get()
//         const artworksArray = [];
//         if(data.empty){
//             res.status(404).send('no artworks found')
//         } else {
//             data.forEach(doc=>{
//                 console.log(doc.data());
//                 const artwork = new Artwork(
//                     doc.id,
//                     doc.data().title,
//                     doc.data().description,
//                     doc.data().size,
//                     doc.data().technique,
//                     doc.data().category,
//                     doc.data().available
//                 )
//                 artworksArray.push(artwork)
//         });
//         res.send(artworksArray)
//         }
     
//     } catch (error){
//         res.status(400).send(error.message)

//     }
// }

const getArtwork = async (req, res, next) => {
    try {
        const id = req.params.id;
        const artwork = await firestore.collection('artworks').doc(id);
        const data = await artwork.get();
        if(!data.exists) {
            res.status(404).send('Artwork with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateArtwork = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const artwork =  await firestore.collection('artworks').doc(id);
        await artwork.update(data);
        res.send('Artwork record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteArtwork = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('artworks').doc(id).delete();
        res.send('Artwork deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// const getCategory= async(req,res,next) => {
//     try {
//         const artworks =  await firestore.collection('artworks');
//         const data = await artworks.get()
//         const artworksArray = [];
//         if(data.empty){
//             res.status(404).send('no artworks found')
//         } else {
//             data.forEach(doc=>{
//                 console.log(doc.data());
//                 const artwork = new Artwork(
//                     doc.id,
//                     doc.data().title,
//                     doc.data().description,
//                     doc.data().size,
//                     doc.data().technique,
//                     doc.data().category,
//                     doc.data().available
//                 )
//                 artworksArray.push(artwork)
//         });
//         res.send(artworksArray)
//         }
     
//     } catch (error){
//         res.status(400).send(error.message)

//     }
// }



module.exports={
    addArtwork,
    getAllArtworks,
    getArtwork,
    updateArtwork,
    deleteArtwork
}