import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {importImage} from '../photoLoader.js'
import {contextMenuDisabled} from './helpers.jsx'


const PhotoGridItem = ({index, photo, parentLocation}) => {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState([]);

    useEffect(() => { 
      const importedImage = importImage(photo.photo_data)
      setImagePath(importedImage) 
    }, [photo])

    return (
          <ImageListItem key={index}>
            <img
              src={imagePath}
              onContextMenu={contextMenuDisabled}
              alt={photo.name}
              loading="lazy"
              onClick={() => navigate(`/photos/${photo.id}`, {state: { parentLocation: parentLocation}})}
            />
            <ImageListItemBar
              sx={{fontFamily: 'Caveat'}}
              title={photo.description}
              position="below"
            />
          </ImageListItem>
    )
};

export default PhotoGridItem;