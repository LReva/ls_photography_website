import React, {useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {all_photo_loader} from '../photos.js'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const localTheme = createTheme({
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        dot: {
          backgroundColor: 'gray', 
        },
        dotActive: {
          backgroundColor: 'black', 
        },
      },
    },
  },
  palette: {
    primary: {
      main: 'rgb(0,0,0)'
    },
  }, 
});


const PhotoCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesNames, setImageNames] = useState([]);
  const [maxSteps, setMaxSteps] = useState(0)
  const imagesContext = require.context('images', true, /\.(JPE?G)$/);

  function importImages(imageNames) {
    const imagesHere = imageNames.map(name => {
      const imagePath = `./${name}`;
      try {
        return imagesContext(imagePath);
      } catch (e) {
        console.warn(`Image not found: ${imagePath}`);
        return null;
      }
    });
    return imagesHere.filter(Boolean);
  }

  useEffect(() => {
    const fetchPhotos = async () => {  
      const result = await all_photo_loader();
      const importedImages = importImages(result.map(image => image.photo_data))
      setImageNames(importedImages)
      setImages(result);
      setMaxSteps(importedImages.length)
      }
      fetchPhotos();
  }, [])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  
  if (images.length > 0) {
     return (
      <div>
        <Box sx={{ height: '90vh', maxWidth: '100%', flexGrow: 1, position: 'relative', overflow: 'hidden'}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.id}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: '90vh',
                      display: 'block',
                      overflow: 'hidden',
                      width: '100vw',
                      objectFit: 'cover',
                    }}
                    src={imagesNames[index]}
                    alt={step.name}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <ThemeProvider theme={localTheme}>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{position:'absolute', 
                  bottom: 0,
                  width: '100%',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
            </ThemeProvider>
        </Box>
      </div>
    )
  }
}
export default PhotoCarousel;
