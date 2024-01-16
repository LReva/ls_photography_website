import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import {importImage} from '../photoLoader.js'


const PhotoCarouselBox = ({photo, style}) => {
  const [imagePath, setImagePath] = useState([]);
  const height = style.height
  const objectFit = style.objectFit

  useEffect(() => { 
    const importedImage = importImage(photo.photo_data)
    setImagePath(importedImage) 
  }, [photo])

  return (
        <Box
            component="img"
            sx={{
                height: {height},
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                objectFit: {objectFit},
                margin:'auto',
            }}
            src={imagePath}
            alt={photo.name}
        />
    )
  }

export default PhotoCarouselBox;