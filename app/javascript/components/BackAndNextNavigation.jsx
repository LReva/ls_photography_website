import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { IconButton, Box } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const BackAndNextNavigation = ({index, photos, parentLocation}) => {
  const theme = useTheme();
  const navigate = useNavigate();
    
    const handleBackOnePhoto = () => {
      navigate(`/photos/${photos[index-1].id}`, {state: { parentLocation: parentLocation}})
    }
    
    const handleNextOnePhoto = () => {
      navigate(`/photos/${photos[index+1].id}`, {state: {parentLocation: parentLocation}})
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
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
              </IconButton>
              <IconButton size="medium" onClick={handleNextOnePhoto} style={{ color: 'white', flex: 1}} disabled={index === photos.length - 1}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
              </IconButton>
            </Box>
        );
    };

export default BackAndNextNavigation;