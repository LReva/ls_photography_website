import React, {useState, useEffect}  from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {importImage} from '../photoLoader.js'
import {contextMenuDisabled} from './helpers.jsx'


const CategoryBox = ({categorySamplePhoto}) => {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState();
  
    useEffect(() => { 
      const importedImage = importImage(categorySamplePhoto.photo.photo_data)
      setImagePath(importedImage)
    }, [categorySamplePhoto])

    return (
        <Card sx={{ minHeight: '280px', width: 320, borderRadius: '25px', textAlign: 'center'}}
              onClick={()=> navigate(`/${categorySamplePhoto.category.name}`)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={imagePath}
                    onContextMenu={contextMenuDisabled}
                    alt={categorySamplePhoto.category.name}>
                </CardMedia>
                <CardContent sx={{ justifyContent: 'flex-end' }}>
                    <Typography gutterBottom variant="h5" sx={{fontFamily: 'Caveat'}}>
                    {categorySamplePhoto.category.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CategoryBox;