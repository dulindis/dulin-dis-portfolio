import { useEffect,useState } from "react";
import {useSelector} from 'react-redux';

function useArtworkList(){
    const artworks =   useSelector(state=>state.gallery.gallery);
    const [artworkList, setArtworkList]=useState([]);
    useEffect(()=>{
        setArtworkList(artworks);
    },[artworks]);
    console.log('artworks from hooks', artworks)
    return artworkList
}
export default useArtworkList