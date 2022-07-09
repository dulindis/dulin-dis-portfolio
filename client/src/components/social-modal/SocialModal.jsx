import React, { useRef, useEffect, useState,useCallback } from 'react'
import SocialFollow from '../social-follow/SocialFollow';
import './social-modal.styles.scss';
import HelmetMetaData from "../helmet-meta-data/HelmetMetaData";
import {AiOutlineCopy} from 'react-icons/ai';
import {GrFormClose} from 'react-icons/gr';

const SocialModal = ({artwork,artworkPageUrl,showModal, setShowModal}) => {
    const { url, title, id, description} = artwork;
    
    const modalRef = useRef();

    const toggleModal = e => {
        setShowModal(!showModal);
      };

    const closeModal = e => {
        if (modalRef.current===e.target) {
            toggleModal()
        }
    }

    const keyPress = useCallback(e=>{
        if(e.key==='Escape' && showModal===true) {
            toggleModal();
            // closeModal()
        }
    },[showModal,toggleModal]);


    const copy =  () => {
         navigator.clipboard.writeText(artworkPageUrl);
      };

      useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return ()=> document.removeEventListener('keydown', keyPress)
    },[keyPress])


  return (
   <div className='social-modal-background'  ref={modalRef} onClick={closeModal}>
    showModal ? ( <div className='social-modal modal-container'>
        <HelmetMetaData title={title} currentUrl={artworkPageUrl} imageUrl={url}></HelmetMetaData>

        <GrFormClose className="close-media-btn" aria-label='close modal' onClick={()=>{toggleModal()}}/>
    
    <SocialFollow 
      currentUrl={artworkPageUrl} 
      imageUrl={url} 
      title={title}
      description={description}
      />
      
            <div className='copy-link-container'>
                 <input type="text" defaultValue={`${artworkPageUrl}`} value={artworkPageUrl} id="myInput"/>
                <button onClick={copy}><AiOutlineCopy/>copy </button>
            </div>


      </div>)
   </div>
  )
}

export default SocialModal