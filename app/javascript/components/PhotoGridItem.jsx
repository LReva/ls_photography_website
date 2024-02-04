import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {importImage} from '../photoLoader.js'
import {contextMenuDisabled} from './helpers.jsx'


const PhotoGridItem = ({index, image, parentLocation}) => {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState([]);

    useEffect(() => { 
      const importedImage = importImage(image.photo_data)
      setImagePath(importedImage) 
    }, [image])

    return (
          <ImageListItem key={index}>
            <img
              src={imagePath}
              onContextMenu={contextMenuDisabled}
              alt={image.name}
              loading="lazy"
              onClick={() => navigate(`/photos/${image.id}`, {state: { parentLocation: parentLocation}})}
            />
            <ImageListItemBar
              sx={{fontFamily: 'Caveat'}}
              title={image.description}
              position="below"
            />
          </ImageListItem>
    )
};

export default PhotoGridItem;