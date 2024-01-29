import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Box } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const localTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(128,128,128)'
    },
  }, 
});

const AutoPlayNavigation = ({index, photos, parentLocation, style}) => {
    const [autoPlayEnabled, setAutoPlayEnabled] = useState(false)
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(index);
    const photoCount = photos.length

    useEffect(() => {
      setActiveStep(index)
    }, [index]);

    useEffect(() => {
        let interval;
      
        if (autoPlayEnabled) {
          interval = setInterval(() => {
            setActiveStep((prevIndex) => {
              const nextIndex = prevIndex === photoCount-1 ? 0 : prevIndex + 1;
              return nextIndex;
            });
          }, 4000);
        }
      
        return () => clearInterval(interval);
      }, [autoPlayEnabled, photoCount]);

    useEffect(() => {
        if (autoPlayEnabled) {
            navigate(`/photos/${photos[activeStep].id}`, {state: {parentLocation: parentLocation}});
        }
    }, [autoPlayEnabled, activeStep, navigate]);
    
    const toggleAutoplay = () => {
        setAutoPlayEnabled(!autoPlayEnabled);
        if (!autoPlayEnabled) {
          navigate(`/photos/${photos[activeStep].id}`, {state: {parentLocation: parentLocation}});
        }
      };
      
        return (
          <ThemeProvider theme={localTheme}>
            <Box  style={style}>
                  { !autoPlayEnabled &&
                    <IconButton
                      color="primary"
                      onClick={toggleAutoplay}
                    >
                      <PlayCircleFilledWhiteIcon  />
                    </IconButton >           
                  }
                  { autoPlayEnabled &&
                    <IconButton
                      color="primary"
                      onClick={toggleAutoplay}
                    >
                      <StopCircleIcon  />
                    </IconButton>
                  }
            </Box>
        </ThemeProvider>
        );
    };

export default AutoPlayNavigation;