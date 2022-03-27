import React from 'react'
import { useParams } from 'react-router-dom';



function ArtworkComponent() {
  const {artworkId} = useParams()

  return (
    <div>ArtworkComponent {artworkId}</div>
  )
}

export default ArtworkComponent