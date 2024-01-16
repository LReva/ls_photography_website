import React from 'react';
import ImageList from '@mui/material/ImageList';
import { useTheme, useMediaQuery } from '@mui/material';
import PhotoGridItem from './PhotoGridItem.jsx';


const PhotoGrid = ({images, parentLocation}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const cols = matches ? 3 : 1;

    return (
        <ImageList sx={{ margin: '5vh',}} variant="masonry" cols={cols} gap={8}>
        {images.map((image, index) => (
          <PhotoGridItem key={index} index={index} images ={images} image={image} parentLocation={parentLocation}/>
        ))}
      </ImageList>
    );
};

export default PhotoGrid;