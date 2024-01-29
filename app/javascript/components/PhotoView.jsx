import React, {useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import { IconButton, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import BackAndNextNavigation from './BackAndNextNavigation';
import AutoPlayNavigation from './AutoPlayNavigation';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useSwipeable } from 'react-swipeable';
import {importImage} from '../photoLoader.js'

const localTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0,0,0)'
    },
  }, 
});

const PhotoView = ({photo, photos, index }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [parentLocation, setParentLocation] = useState('/photos')
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imagePath, setImagePath] = useState([]);

  useEffect(() => { 
    const parentLocation = (location.state ? location.state.parentLocation : "/photos")
    setParentLocation(parentLocation) 
  }, [photo])

  useEffect(() => { 
    const importedImage = importImage(photo.photo_data)
    setImagePath(importedImage) 
  }, [photo])


  const handleGoBackButton = () => {
    navigate(`${parentLocation}`)
  }

  const handleBackOnePhoto = () => {
    if (index > 0) {
    navigate(`/photos/${photos[index-1].id}`, {state: { parentLocation: parentLocation}})
    }
  }
  
  const handleNextOnePhoto = () => {
    if (index < photos.length - 1) {
    navigate(`/photos/${photos[index+1].id}`, {state: {parentLocation: parentLocation}})
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextOnePhoto(),
    onSwipedRight: () => handleBackOnePhoto(),
    preventDefaultTouchmoveEvent: true,  // Prevents scrolling while swiping)
    trackMouse: true // Track mouse swipes on non-touch devices
  });

  return (
    <ThemeProvider theme={localTheme}>
      <Box sx={{position:'relative'}}>
        <Box sx= {{display:'flex'}}>
          <Button
            startIcon ={<ArrowBackIcon/>}
            sx = {{color: 'black',
                  fontFamily: 'Nanum Brush Script'}}
            onClick={handleGoBackButton}
            >
            Go Back
          </Button>
          <IconButton
            color="inherit"
            sx={{marginLeft: 'auto'}}

            onClick={() => setIsFullScreen(true)}
            >
            <FullscreenIcon/>
          </IconButton>
          <AutoPlayNavigation index={index} photos={photos} parentLocation={parentLocation}/>
        </Box>
        <Box sx={{display: 'flex',
                            flexDirection: 'row',
                            alignContent: 'center'}}>
          <Button 
            sx ={{display: {xs: 'none', md: 'flex'}}}
            size="large" 
            onClick={handleBackOnePhoto} 
            disabled={index === 0}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
          </Button>
          <img src={imagePath} 
            {...handlers}
            alt={photo.name} 
            style={{                     
            height: '80vh',
            display: 'block',
            overflow: 'hidden',
            width: '100vw',
            objectFit: 'contain'}} 
          />
          <Button 
            sx ={{display: {xs: 'none', md: 'flex'}}}
            size="large" 
            onClick={handleNextOnePhoto} 
            disabled={index === 0}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
          </Button>
        </Box>
          {isFullScreen && (
            <Box className="fullScreenModal">
              <IconButton
                color="inherit"
                onClick={() => setIsFullScreen(false)}
                style={{ position: 'absolute', top: 20, right: 20 }}
              >
                <FullscreenExitIcon style={{ color: 'white' }} />
              </IconButton>
              <AutoPlayNavigation index={index} photos={photos} parentLocation={parentLocation} style={{ position: 'absolute', top: 50, right: 20 }}/>
              <BackAndNextNavigation index={index} photos={photos} parentLocation={parentLocation}/>
              <img 
                  src={imagePath}
                  {...handlers}
                  alt={photo.name}
                  style={{ maxWidth: '100%', 
                           maxHeight: '100%' }} />
            </Box>
          )}
    </Box>
  </ThemeProvider>
  );
};


export default PhotoView;