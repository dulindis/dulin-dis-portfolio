import React, {useEffect, useState} from 'react';
import {GalleryContainer} from './gallery.styles';
// import {fetchGalleryStart} from '../../redux/gallery/gallery.actions';
import axios from 'axios';
import  CollecionOverview from '../../components/collection-overview/collection-overview.component';
import {getCategoryPreview} from '../../utils/utils';
import CollectionPreviewElement from '../../components/collection-preview-element/collection-preview-element.component';

const GalleryPage = () => {
    const [artworks,setArtworks] = useState([]);

    const getData = async (url) => {
        await axios.get(url).then(res=>{ setArtworks(res.data);console.log('artworks converted',artworks)});
    };

    useEffect(()=>{
      getData('http://localhost:8080/api/artwork');
   
    },[])


    return (
        <GalleryContainer>
            <div>
            {

                Object.keys(artworks).forEach((category,index)=>{
                    console.log('category:',category)
                    return <CollectionPreviewElement key={index} collectionPreviewItems={getCategoryPreview(category)}/>
                })
                //for (const category in artworks) {
                   // {/* getCategoryPreview(category) */}

                 //   return <CollectionPreviewElement collectionPreviewItems={getCategoryPreview(category)}/>
//}
               
            }
            </div>
            {/* <CollecionOverview/> */}
        </GalleryContainer>
    )
}

export default GalleryPage


                // {/* artworks.map((artwork,index)=>{
                //     return (
                //         <h1>{artwork.title}</h1>
                //     )
                // }) */}