import React from 'react';
import { IconButton, Box } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const BackAndNextNavigation = ({index, photos}) => {
    
    const handleBackOnePhoto = () => {
      window.location.href=`/photos/${photos[index-1].id}`
    }
    
    const handleNextOnePhoto = () => {
      window.location.href=`/photos/${photos[index+1].id}`
    }
    
        return (

            <Box style={{
              position: 'absolute',
              bottom: 15,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '10%', 
              maxWidth: '300px', 
          }}>
              <IconButton size="medium" onClick= {handleBackOnePhoto} style={{ color: 'white', flex: 1}} disabled={index === 0} >
                <KeyboardArrowLeft />
              </IconButton>
              <IconButton size="medium" onClick={handleNextOnePhoto} style={{ color: 'white', flex: 1}} disabled={index === photos.length - 1}>
                < KeyboardArrowRight/>
              </IconButton>
            </Box>
        );
    };

export default BackAndNextNavigation;