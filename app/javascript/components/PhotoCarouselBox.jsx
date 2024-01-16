import React, {useState, useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import {importImage} from '../photoLoader.js'


const PhotoCarouselBox = ({photo, style}) => {
  const [imagePath, setImagePath] = useState([]);
  const height = style.height
  const objectFit = style.objectFit
  // const imgRef = useRef(null);
  // const [objectFit, setObjectFit] = useState('scale-down'); 

  useEffect(() => { 
    const importedImage = importImage(photo.photo_data)
    setImagePath(importedImage) 
  }, [photo])

  // useEffect(() => {
  //   const img = imgRef.current;
  //   if (img) {
  //     const handleLoad = () => {
  //       const naturalWidth = img.naturalWidth;
  //       const naturalHeight = img.naturalHeight;
  //       const container = img.parentElement;
  //       const containerWidth = container.offsetWidth;
  //       const containerHeight = container.offsetHeight;
  //       if (naturalWidth > containerWidth || naturalHeight > containerHeight) {
  //         setObjectFit('contain');
  //       } else {
  //         setObjectFit('scale-down');
  //       }
  //     };
  //     img.addEventListener('load', handleLoad);
  //     if (img.complete) {
  //       handleLoad();
  //     }
  //     return () => {
  //       img.removeEventListener('load', handleLoad);
  //     };
  //   }
  // }, [photo]);

  return (
        <Box
            component="img"
            sx={{
                height: height,
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                objectFit: objectFit,
                margin:'auto',
            }}
            src={imagePath}
            alt={photo.name}
        />
    )
  }

export default PhotoCarouselBox;