import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useTheme, useMediaQuery } from '@mui/material';



const PhotoGrid = ({images, imagesNames}) => {
    const theme = useTheme();
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
              onClick={()=> window.location.href=`/photos/${image.id}`}
            />
            <ImageListItemBar
              sx={{fontFamily: 'Caveat'}}
              title={image.name}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
};

export default PhotoGrid;