import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const CategoryBox = (photo) => {
    const imagesContext = require.context('images', true, /\.(JPE?G)$/);

    function importImage(imageName) {
        const imagePath = `./${imageName}`;
        try {
            return imagesContext(imagePath);
        } catch (e) {
            console.warn(`Image not found: ${imagePath}`);
            return null;
        }
      }

    return (
        <Card sx={{ minHeight: '280px', width: 320, borderRadius: '25px', textAlign: 'center'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={importImage(photo.photo.photo.photo_data)}
                    alt={photo.photo.category.name}>
                </CardMedia>
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                    <Typography gutterBottom variant="h5" sx={{fontFamily: 'Caveat'}}>
                    {photo.photo.category.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CategoryBox;