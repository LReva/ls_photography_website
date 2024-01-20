import React, {useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconButton, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import BackAndNextNavigation from './BackAndNextNavigation';
import AutoPlayNavigation from './AutoPlayNavigation';
import {importImage} from '../photoLoader.js'

const PhotoView = ({photo, photos, index }) => {
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

  return (
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
        <img src={imagePath} 
          alt={photo.name} 
          style={{                     
          height: '80vh',
          display: 'block',
          overflow: 'hidden',
          width: '100vw',
          objectFit: 'contain'}} 
        />
        <BackAndNextNavigation index={index} photos={photos} parentLocation={parentLocation}/>
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
            <img src={imagePath} alt={photo.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Box>
        )}
  </Box>
  );
};


export default PhotoView;