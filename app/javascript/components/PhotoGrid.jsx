import React from 'react';
import ImageList from '@mui/material/ImageList';
import { useTheme, useMediaQuery } from '@mui/material';
import PhotoGridItem from './PhotoGridItem.jsx';


const PhotoGrid = ({photos, parentLocation}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const cols = matches ? 3 : 1;

    return (
        <ImageList sx={{ margin: '5vh',}} variant="masonry" cols={cols} gap={8}>
        {photos.map((photo, index) => (
          <PhotoGridItem key={index} index={index} photo={photo} parentLocation={parentLocation}/>
        ))}
      </ImageList>
    );
};

export default PhotoGrid;