import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme, useMediaQuery } from '@mui/material';


const PhotoGrid = ({images, imagesNames, parentLocation}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const cols = matches ? 3 : 1;

    return (
        <ImageList sx={{ margin: '5vh',}} variant="masonry" cols={cols} gap={8}>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img
              src={`${imagesNames[index]}`}
              alt={image.name}
              loading="lazy"
              onClick={() => navigate(`/photos/${image.id}`, {state: {photos: images, index: index, parentLocation: parentLocation}})}
            />
            <ImageListItemBar
              sx={{fontFamily: 'Caveat'}}
              title={image.description}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
};

export default PhotoGrid;