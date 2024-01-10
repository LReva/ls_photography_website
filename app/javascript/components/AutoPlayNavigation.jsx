import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Box } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';

const AutoPlayNavigation = ({index, photos, style}) => {
    const [autoPlayEnabled, setAutoPlayEnabled] = useState(false)
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(index);
    const photoCount = photos.length

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
            navigate(`/photos/${photos[activeStep].id}`);
        }
    }, [autoPlayEnabled, activeStep, navigate]);
    
    const toggleAutoplay = () => {
        setAutoPlayEnabled(!autoPlayEnabled);
        if (!autoPlayEnabled) {
          navigate(`/photos/${photos[activeStep].id}`);
        }
      };
      
        return (

            <Box  style={style}>
                  { !autoPlayEnabled &&
                    <IconButton
                      color="inherit"
                      onClick={toggleAutoplay}
                    //   style={{ position: 'absolute', top: 50 }}
                    >
                      <PlayCircleFilledWhiteIcon  />
                    </IconButton >           
                  }
                  { autoPlayEnabled &&
                    <IconButton
                      color="inherit"
                      onClick={toggleAutoplay}
                    //   style={{ position: 'absolute', top: 50 }}
                    >
                      <StopCircleIcon  />
                    </IconButton>
                  }
        </Box>
        );
    };

export default AutoPlayNavigation;