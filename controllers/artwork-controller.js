'use strict';
const firebase = require('../db');
const Artwork = require('../models/artwork');
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

const getAllArtworks = async (req,res,next) =>{
    try {
        const artworks =  await firestore.collection('artworks');
        const data = await artworks.get()
        const artworksArray = [];
        if(data.empty){
            res.status(404).send('no artworks found')
        } else {
            data.forEach(doc=>{
                console.log(doc.data());
                const artwork = new Artwork(
                    doc.id,
                    doc.data().title,
                    doc.data().description,
                    doc.data().size,
                    doc.data().technique,
                    doc.data().category,
                    doc.data().available
                )
                artworksArray.push(artwork)
        });
        res.send(artworksArray)
        }
     
    } catch (error){
        res.status(400).send(error.message)

    }
}

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



module.exports={
    addArtwork,
    getAllArtworks,
    getArtwork,
    updateArtwork,
    deleteArtwork
}